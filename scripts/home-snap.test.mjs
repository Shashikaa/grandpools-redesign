import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const output=ts.transpileModule(fs.readFileSync('src/components/HomeStory/scroll-model.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const exports={};new Function('exports',output)(exports);
const {chooseCheckpoint,orderedCheckpoints}=exports;
test('a normal forward gesture finishes one inner animation before the next section',()=>{
 assert.equal(chooseCheckpoint(2200,2320,[0,1000,2200,3200,4200,5500],1000),3200);
});
test('expert and app remain distinct stops in both directions',()=>{
 const stops=[7000,8000,9000,10000];
 assert.equal(chooseCheckpoint(7000,7140,stops,1000),8000);
 assert.equal(chooseCheckpoint(8000,8140,stops,1000),9000);
 assert.equal(chooseCheckpoint(9000,8860,stops,1000),8000);
});
test('tiny trackpad corrections stay under direct user control',()=>{
 assert.equal(chooseCheckpoint(2200,2212,[2200,3200],1000),null);
 assert.equal(chooseCheckpoint(2200,2188,[1200,2200],1000),null);
});
test('deliberate long travel settles near its destination without rewinding several scenes',()=>{
 assert.equal(chooseCheckpoint(1000,4700,[0,1000,2000,3000,4000,5000],1000),5000);
});
test('resize measurements are clamped, sorted and deduplicated',()=>{
 assert.deepEqual(orderedCheckpoints([4000,0,1000,1000.2,-90,Infinity,9000],5000),[0,1000,4000,5000]);
});

test('a standard mouse-wheel detent also settles a long reverse interval',()=>{assert.equal(chooseCheckpoint(2153,2105,[0,937,2153,3089],936),937);});
