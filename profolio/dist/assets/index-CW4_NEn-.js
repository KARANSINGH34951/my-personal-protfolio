function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-CTr-qUmH.js","assets/ValueWithRandom-CcoklFFQ.js","assets/index-DkRC89-Q.js","assets/index-DWnyyBjG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DkRC89-Q.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CTr-qUmH.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
