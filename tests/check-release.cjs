const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/../index.html','utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
const pure=script.split('const defaults=')[0];
const risks=script.slice(script.indexOf('function agentRiskStatus('),script.indexOf('function brandOptions('));
const result=vm.runInNewContext(pure+'\n'+risks+`\n(()=>{
 const plans=Object.values(CLINICAL_PLANS).flat();
 return {count:DIAGNOSES.length,unique:new Set(DIAGNOSES.map(d=>d.id)).size,sampleDiagnoses:clinicalDiagnosisCount(),options:plans.length,products:Object.values(BRANDS).flat().length,maxBrands:Math.max(...Object.values(BRANDS).map(b=>b.length)),published:DIAGNOSES.flatMap(published).length,
 completeReferences:plans.every(p=>AGENTS[p.agent]&&BRANDS[p.agent]?.length&&p.sources.every(s=>SOURCES[s]))&&Object.values(BRANDS).flat().every(b=>SOURCES[b.kub]&&b.barcode.length===13&&b.size>0&&b.price>0&&b.priceDate&&b.source.startsWith('https:')),
 allergyHeld:Object.keys(AGENTS).every(k=>agentRiskStatus(k,new Set(['allergy'])).hold),pregnancyHeld:Object.keys(AGENTS).every(k=>agentRiskStatus(k,new Set(['pregnant'])).hold),renalAntibioticHeld:agentRiskStatus('amoxiclav',new Set(['renal'])).hold,clearRisk:!agentRiskStatus('amoxiclav',new Set()).hold,
 antibioticOnlySinus:Object.entries(CLINICAL_PLANS).filter(([id,ps])=>ps.some(p=>p.agent==='amoxiclav')).map(([id])=>id),
 antibioticTablets:CLINICAL_PLANS.sinuzit.find(p=>p.agent==='amoxiclav').quantity.total,antibioticBoxes:BRANDS.amoxiclav.map(b=>Math.ceil(10/b.size)),paracetamolBoxes:BRANDS.paracetamol.map(b=>Math.ceil(18/b.size)),
 invalid:[isPublishable({}),isPublishable({verification:{active:true},medicines:[{}]})],search:matches(DIAGNOSES.find(d=>d.id==='tinea-cruris'),'kasik mantari')};
})()`);
assert.equal(result.count,40);assert.equal(result.unique,40);assert.equal(result.sampleDiagnoses,40);assert.equal(result.options,50);assert.equal(result.products,35);assert(result.maxBrands<=3);assert.equal(result.published,0);
for(const k of ['completeReferences','allergyHeld','pregnancyHeld','renalAntibioticHeld','clearRisk','search'])assert.equal(result[k],true,k);
assert.equal(JSON.stringify(result.antibioticOnlySinus),'["sinuzit"]');assert.equal(result.antibioticTablets,10);assert.equal(JSON.stringify(result.antibioticBoxes),'[1,1,1]');assert.equal(JSON.stringify(result.paracetamolBoxes),'[1,1]');assert.equal(JSON.stringify(result.invalid),'[false,false]');
for(const text of ['Geliştirme önizlemesi','Reçete Hazırlanıyor','Etken Madde Bilgisi Var','renderReports','href="#raporlu"','id="category-chips"'])assert(!html.includes(text),text);
assert(html.includes('<dialog id="selection-dialog"'));assert(html.includes('Karar destek aracıdır, son karar hekime aittir.'));
assert(!/<(?:script|link)[^>]+(?:src|href)=["']https?:/i.test(html));assert(!/navigator\.clipboard|serviceWorker|rel=["']manifest/i.test(html));
console.log(JSON.stringify({status:'passed',...result},null,2));
const added=JSON.parse(fs.readFileSync(__dirname+'/../docs/sample-recipes-0.4.0.json','utf8'));
assert.equal(Object.keys(added.plans).length,20);
for(const p of added.productChecks){assert.equal(p.skrs.status,'Aktif');assert.equal(p.skrs.prescriptionType,'Normal');assert(p.ek4aCode);assert.equal(p.fullVerification,false);}
assert(!Object.values(added.brands).flat().some(b=>['8699490561225','8699504612110'].includes(b.barcode)));
assert.equal(added.plans.tonsillofarenjit[0].quantity.total,20);
assert.equal(Math.ceil(20/added.brands.amoxicillin[0].size),2);
assert.equal(Math.ceil(added.plans['otitis-media'][0].quantity.total/16),1);
assert.equal(added.plans.sistit[0].quantity.total,1);
assert.equal(added.plans.kabizlik[0].quantity.total,210);
assert.equal(added.plans.uyuz[0].quantity.total,120);
assert(added.agents.ors.dose.includes('1 litre'));
assert(added.agents.ors.risks.renal.hold&&added.agents.ors.risks.hepatic.hold);
assert(added.plans['kuru-goz'][0].condition.includes('acilde görevli tüm pratisyenlere genellenmez'));
assert(added.plans['kuru-goz'][0].sources.includes('sut2026'));
assert(added.plans.dispepsi[0].condition.includes('bağımsız “dispepsi” endikasyonu bulunmadığından'));
assert(added.plans.konjonktivit[0].condition.includes('Viral/alerjik'));
assert(added.plans.tonsillofarenjit[0].condition.includes('pozitif hızlı antijen testi'));
console.log('Yeni 20 tanı: ürün, kapsam ve miktar kontrolleri geçti.');

assert.equal(JSON.stringify(added.plans.urtiker[0].brandIds),'["zyrtec"]');
assert.equal(added.addedProducts,25);
