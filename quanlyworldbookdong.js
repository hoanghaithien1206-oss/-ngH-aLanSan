import {
  createPinia as e,
  defineStore as t,
  storeToRefs as n,
} from "https://testingcf.jsdelivr.net/npm/pinia/+esm";
import { klona as a } from "https://testingcf.jsdelivr.net/npm/klona/+esm";

(async function() {
var r = {
    170(e, t, n) {
      (n.r(t), n.d(t, { default: () => i }));
      var a = n(492),
        r = n.n(a),
        s = n(748),
        o = n.n(s)()(r());
      o.push([
        e.id,
        ".dynamic-worldbook-settings[data-v-74093af2]{color:var(--SmartThemeBodyColor)}.dw-grid[data-v-74093af2]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:10px}.dw-card[data-v-74093af2]{padding:14px;border:1px solid color-mix(in srgb,var(--SmartThemeBorderColor) 68%,transparent);border-radius:14px;background:linear-gradient(180deg,color-mix(in srgb,var(--SmartThemeBlurTintColor) 90%,transparent) 0%,transparent 100%),color-mix(in srgb,var(--SmartThemeQuoteColor) 9%,transparent);box-shadow:inset 0 1px 0 color-mix(in srgb,white 8%,transparent)}.dw-card-span[data-v-74093af2]{grid-column:1/-1}.dw-inner-grid[data-v-74093af2]{margin-top:12px}.dw-hero[data-v-74093af2]{background:radial-gradient(circle at top right,color-mix(in srgb,#e0a26f 18%,transparent),transparent 42%),linear-gradient(180deg,color-mix(in srgb,var(--SmartThemeBlurTintColor) 92%,transparent) 0%,transparent 100%),color-mix(in srgb,var(--SmartThemeQuoteColor) 10%,transparent)}.dw-card-title[data-v-74093af2],.dw-subtitle[data-v-74093af2]{font-weight:700}.dw-subtitle[data-v-74093af2]{margin:14px 0 8px}.dw-status-row[data-v-74093af2],.dw-actions[data-v-74093af2],.dw-tag-list[data-v-74093af2]{display:flex;flex-wrap:wrap;gap:8px}.dw-pill[data-v-74093af2],.dw-tag[data-v-74093af2]{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border:1px solid color-mix(in srgb,var(--SmartThemeBorderColor) 78%,transparent);border-radius:999px;background:color-mix(in srgb,var(--SmartThemeQuoteColor) 12%,transparent);font-size:12px}.dw-pill.is-ready[data-v-74093af2],.dw-pill.is-on[data-v-74093af2]{border-color:color-mix(in srgb,#72c59a 42%,var(--SmartThemeBorderColor))}.dw-pill.is-waiting_mvu[data-v-74093af2],.dw-pill.is-busy[data-v-74093af2]{border-color:color-mix(in srgb,#e1b56b 42%,var(--SmartThemeBorderColor))}.dw-pill.is-off[data-v-74093af2]{border-color:color-mix(in srgb,#d07a7a 42%,var(--SmartThemeBorderColor))}.dw-meta-list[data-v-74093af2]{display:grid;gap:6px;margin-top:10px;opacity:0.92}.dw-toggle[data-v-74093af2],.dw-field[data-v-74093af2],.dw-textarea[data-v-74093af2]{display:flex;justify-content:space-between;gap:12px;margin:10px 0}.dw-toggle[data-v-74093af2],.dw-field[data-v-74093af2]{align-items:center}.dw-toggle input[type='checkbox'][data-v-74093af2]{margin-right:8px}.dw-field span[data-v-74093af2]{flex:0 0 110px}.dw-field .text_pole[data-v-74093af2]{flex:1 1 auto}.dw-textarea[data-v-74093af2]{flex-direction:column;align-items:stretch}.dw-textarea span[data-v-74093af2]{font-weight:600}.dw-textarea textarea[data-v-74093af2]{width:100%;min-height:108px;resize:vertical}.dw-tip[data-v-74093af2],.dw-error[data-v-74093af2],.dw-empty[data-v-74093af2],.dw-item-sub[data-v-74093af2]{margin-top:10px;opacity:0.88}.dw-error[data-v-74093af2]{color:color-mix(in srgb,#ff8d8d 72%,var(--SmartThemeBodyColor))}.dw-list[data-v-74093af2]{display:grid;gap:8px}.dw-list-item[data-v-74093af2]{padding:10px 12px;border-radius:10px;border:1px solid color-mix(in srgb,var(--SmartThemeBorderColor) 45%,transparent);background:color-mix(in srgb,var(--SmartThemeQuoteColor) 7%,transparent)}.dw-item-main[data-v-74093af2]{font-weight:600}.dw-item-head[data-v-74093af2]{display:flex;justify-content:space-between;gap:10px}.dw-score-badge[data-v-74093af2]{flex:0 0 auto;padding:2px 10px;border-radius:999px;border:1px solid color-mix(in srgb,var(--SmartThemeBorderColor) 70%,transparent);font-size:12px}.dw-score-badge.is-match[data-v-74093af2]{border-color:color-mix(in srgb,#72c59a 42%,var(--SmartThemeBorderColor))}.dw-score-badge.is-wait[data-v-74093af2]{border-color:color-mix(in srgb,#d8a66d 42%,var(--SmartThemeBorderColor))}.dw-reasons[data-v-74093af2]{display:grid;gap:4px;margin-top:8px}.dw-reason[data-v-74093af2]{opacity:0.88}.dw-metrics[data-v-74093af2]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.dw-metric[data-v-74093af2]{padding:10px;border-radius:12px;text-align:center;background:color-mix(in srgb,var(--SmartThemeBlurTintColor) 60%,transparent)}.dw-metric-value[data-v-74093af2]{font-size:24px;font-weight:700}.dw-metric-label[data-v-74093af2]{margin-top:4px;opacity:0.82}.dw-metrics-dense .dw-metric-value[data-v-74093af2]{font-size:18px}@media (max-width:900px){.dw-grid[data-v-74093af2]{grid-template-columns:1fr}.dw-card-span[data-v-74093af2]{grid-column:auto}}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/踏月寻仙-动态世界书管理/设置界面.vue"],
          names: [],
          mappings:
            "AA6cA,6CACE,gCACF,CAEA,0BACE,YAAa,CACb,6CAAgD,CAChD,QAAS,CACT,eACF,CAEA,0BACE,YAAa,CACb,gFAAmF,CACnF,kBAAmB,CACnB,sLAEiE,CACjE,gEACF,CAEA,+BACE,gBACF,CAEA,gCACE,eACF,CAEA,0BACE,uRAIF,CAEA,8DAEE,eACF,CAEA,8BACE,iBACF,CAEA,2FAGE,YAAa,CACb,cAAe,CACf,OACF,CAEA,mDAEE,mBAAoB,CACpB,kBAAmB,CACnB,sBAAuB,CACvB,eAAgB,CAChB,cAAe,CACf,gFAAmF,CACnF,mBAAoB,CACpB,yEAA4E,CAC5E,cACF,CAEA,mEAEE,wEACF,CAEA,2EAEE,wEACF,CAEA,iCACE,wEACF,CAEA,+BACE,YAAa,CACb,OAAQ,CACR,eAAgB,CAChB,YACF,CAEA,qFAGE,YAAa,CACb,6BAA8B,CAC9B,QAAS,CACT,aACF,CAEA,uDAEE,kBACF,CAEA,mDACE,gBACF,CAEA,gCACE,cACF,CAEA,sCACE,aACF,CAEA,8BACE,qBAAsB,CACtB,mBACF,CAEA,mCACE,eACF,CAEA,uCACE,UAAW,CACX,gBAAiB,CACjB,eACF,CAEA,6GAIE,eAAgB,CAChB,YACF,CAEA,2BACE,+DACF,CAEA,0BACE,YAAa,CACb,OACF,CAEA,+BACE,iBAAkB,CAClB,kBAAmB,CACnB,gFAAmF,CACnF,wEACF,CAEA,+BACE,eACF,CAEA,+BACE,YAAa,CACb,6BAA8B,CAC9B,QACF,CAEA,iCACE,aAAc,CACd,gBAAiB,CACjB,mBAAoB,CACpB,gFAAmF,CACnF,cACF,CAEA,0CACE,wEACF,CAEA,yCACE,wEACF,CAEA,6BACE,YAAa,CACb,OAAQ,CACR,cACF,CAEA,4BACE,YACF,CAEA,6BACE,YAAa,CACb,6CAAgD,CAChD,QACF,CAEA,4BACE,YAAa,CACb,kBAAmB,CACnB,iBAAkB,CAClB,4EACF,CAEA,kCACE,cAAe,CACf,eACF,CAEA,kCACE,cAAe,CACf,YACF,CAEA,oDACE,cACF,CAEA,yBACE,0BACE,yBACF,CAEA,+BACE,gBACF,CACF",
          sourcesContent: [
            '<template>\n  <div class="dynamic-worldbook-settings">\n    <div class="inline-drawer">\n      <div class="inline-drawer-toggle inline-drawer-header">\n        <b>动态世界书管理 V2</b>\n        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>\n      </div>\n      <div class="inline-drawer-content">\n        <div class="dw-grid">\n          <section class="dw-card dw-hero">\n            <div class="dw-card-title">当前状态</div>\n            <div class="dw-status-row">\n              <span class="dw-pill" :class="`is-${runtime.bootStatus}`">{{ bootStatusText }}</span>\n              <span class="dw-pill" :class="runtime.processing ? \'is-busy\' : \'is-idle\'">{{ runtime.processing ? \'处理中\' : \'空闲\' }}</span>\n              <span class="dw-pill" :class="settings.enabled ? \'is-on\' : \'is-off\'">{{ settings.enabled ? \'已启用\' : \'已停用\' }}</span>\n              <span class="dw-pill" :class="settings.auto_apply ? \'is-on\' : \'is-off\'">{{ settings.auto_apply ? \'自动应用\' : \'手动模式\' }}</span>\n            </div>\n            <div class="dw-meta-list">\n              <div>策略：默认最优</div>\n              <div>世界书：{{ runtime.worldbookName || \'未绑定 / 未读取\' }}</div>\n              <div>最后原因：{{ runtime.lastReason || \'暂无\' }}</div>\n              <div>最后时间：{{ lastUpdatedAtText }}</div>\n            </div>\n            <div v-if="runtime.lastMessage" class="dw-tip">{{ runtime.lastMessage }}</div>\n            <div v-if="runtime.lastError" class="dw-error">{{ runtime.lastError }}</div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">控制台</div>\n            <label class="dw-toggle">\n              <input v-model="settings.enabled" type="checkbox" />\n              <span>启用动态世界书管理</span>\n            </label>\n            <label class="dw-toggle">\n              <input v-model="settings.auto_apply" type="checkbox" />\n              <span>监听事件后自动应用</span>\n            </label>\n            <label class="dw-toggle">\n              <input v-model="settings.show_toasts" type="checkbox" />\n              <span>显示通知弹窗</span>\n            </label>\n            <label class="dw-toggle">\n              <input v-model="settings.debug" type="checkbox" />\n              <span>调试日志</span>\n            </label>\n\n            <label class="dw-field">\n              <span>上下文窗口</span>\n              <input v-model.number="settings.context_window" class="text_pole" type="number" min="1" max="8" />\n            </label>\n\n            <label class="dw-field">\n              <span>防抖毫秒</span>\n              <input v-model.number="settings.debounce_delay" class="text_pole" type="number" min="100" max="5000" step="100" />\n            </label>\n\n            <label class="dw-field">\n              <span>地图延续轮数</span>\n              <input v-model.number="settings.map_sticky_cycles" class="text_pole" type="number" min="0" max="8" />\n            </label>\n\n            <label class="dw-field">\n              <span>角色延续轮数</span>\n              <input v-model.number="settings.character_sticky_cycles" class="text_pole" type="number" min="0" max="8" />\n            </label>\n\n            <div class="dw-actions">\n              <input class="menu_button" type="button" value="立即开灯刷新" :disabled="busy" @click="runEnableRefresh" />\n              <input class="menu_button" type="button" value="执行收灯" :disabled="busy" @click="runDisableRefresh" />\n              <input class="menu_button" type="button" value="同步上下文" :disabled="busy" @click="handleSyncRuntime" />\n            </div>\n\n            <div class="dw-actions">\n              <input class="menu_button" type="button" value="重读设置" :disabled="busy" @click="reloadSettings" />\n              <input class="menu_button" type="button" value="重置设置" :disabled="busy" @click="handleResetSettings" />\n            </div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">上下文</div>\n            <div class="dw-meta-list">\n              <div>当前区域：{{ runtime.context?.currentRegion || \'未知\' }}</div>\n              <div>所属层级：{{ runtime.context?.currentLayer || \'未知\' }}</div>\n              <div>当前宗门域：{{ runtime.context?.domainName || \'未推断\' }}</div>\n              <div>当前主势力：{{ runtime.context?.factionName || \'未推断\' }}</div>\n            </div>\n            <div v-if="runtime.context?.environmentDesc" class="dw-tip">{{ runtime.context.environmentDesc }}</div>\n            <div class="dw-subtitle">最近消息</div>\n            <div v-if="runtime.context?.recentMessages?.length" class="dw-list">\n              <div v-for="(message, index) in runtime.context.recentMessages.slice(0, 4)" :key="`${index}-${message}`" class="dw-list-item">\n                {{ message }}\n              </div>\n            </div>\n            <div v-else class="dw-empty">暂无可用消息上下文</div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">最近一次刷新</div>\n            <div class="dw-metrics">\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.summary.enabledCount }}</div>\n                <div class="dw-metric-label">开启</div>\n              </div>\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.summary.disabledCount }}</div>\n                <div class="dw-metric-label">关闭</div>\n              </div>\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.summary.totalProcessed }}</div>\n                <div class="dw-metric-label">处理条目</div>\n              </div>\n            </div>\n\n            <div class="dw-subtitle">变更条目</div>\n            <div v-if="runtime.summary.changedEntries.length" class="dw-list">\n              <div v-for="item in runtime.summary.changedEntries.slice(0, 10)" :key="`${item.name}-${item.mode}-${item.to}`" class="dw-list-item">\n                <div class="dw-item-main">{{ item.name }}</div>\n                <div class="dw-item-sub">{{ item.from }} → {{ item.to }} · {{ item.mode }}</div>\n              </div>\n            </div>\n            <div v-else class="dw-empty">最近一次没有条目切换</div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">手动覆盖</div>\n            <label class="dw-textarea">\n              <span>强制开启条目</span>\n              <textarea v-model="forcedEnableText" class="text_pole" rows="5" placeholder="[地图] 神木枯冢&#10;[角色] 凌寒镜"></textarea>\n            </label>\n            <label class="dw-textarea">\n              <span>强制关闭条目</span>\n              <textarea v-model="forcedDisableText" class="text_pole" rows="5" placeholder="[地图] 东苍&#10;[角色] 某角色"></textarea>\n            </label>\n            <div class="dw-tip">每行一个完整条目名，保存后会立刻参与判定。强制覆盖优先级高于评分和布尔规则。</div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">地图判定</div>\n            <div v-if="mapDecisionEntries.length" class="dw-list">\n              <div v-for="item in mapDecisionEntries" :key="`map-score-${item.name}-${item.score}`" class="dw-list-item">\n                <div class="dw-item-head">\n                  <div class="dw-item-main">{{ item.name }}</div>\n                  <div class="dw-score-badge" :class="item.matched ? \'is-match\' : \'is-wait\'">\n                    {{ item.score }} / {{ item.threshold }}\n                  </div>\n                </div>\n                <div class="dw-item-sub">\n                  {{ item.category }} · {{ item.source === \'override\' ? \'手动覆盖\' : item.source === \'score\' ? \'评分决策\' : \'布尔规则\' }}\n                </div>\n                <div class="dw-reasons">\n                  <div v-for="reason in item.reasons" :key="`map-reason-${item.name}-${reason}`" class="dw-reason">\n                    {{ reason }}\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div v-else class="dw-empty">还没有收集到地图判定</div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">评分解释</div>\n            <div v-if="runtime.summary.topScoredEntries.length" class="dw-list">\n              <div v-for="item in runtime.summary.topScoredEntries.slice(0, 10)" :key="`${item.name}-${item.score}-${item.category}`" class="dw-list-item">\n                <div class="dw-item-head">\n                  <div class="dw-item-main">{{ item.name }}</div>\n                  <div class="dw-score-badge" :class="item.matched ? \'is-match\' : \'is-wait\'">\n                    {{ item.score }} / {{ item.threshold }}\n                  </div>\n                </div>\n                <div class="dw-item-sub">\n                  {{ item.category }} · {{ item.source === \'override\' ? \'手动覆盖\' : item.source === \'score\' ? \'评分决策\' : \'布尔规则\' }}\n                </div>\n                <div class="dw-reasons">\n                  <div v-for="reason in item.reasons" :key="`${item.name}-${reason}`" class="dw-reason">\n                    {{ reason }}\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div v-else class="dw-empty">还没有收集到评分解释</div>\n          </section>\n\n          <section class="dw-card">\n            <div class="dw-card-title">规则体检</div>\n            <div class="dw-actions">\n              <input class="menu_button" type="button" value="运行体检" :disabled="busy" @click="handleRunDiagnostics" />\n              <input class="menu_button" type="button" value="上下文填入沙盒" :disabled="busy" @click="hydrateSandboxFromRuntime" />\n            </div>\n            <div v-if="runtime.diagnostics" class="dw-metrics dw-metrics-dense">\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.diagnostics.totalEntries }}</div>\n                <div class="dw-metric-label">启用条目</div>\n              </div>\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.diagnostics.managedEntries }}</div>\n                <div class="dw-metric-label">已纳管</div>\n              </div>\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.diagnostics.unmanagedEntries }}</div>\n                <div class="dw-metric-label">未纳管</div>\n              </div>\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.diagnostics.unmappedMapEntries.length }}</div>\n                <div class="dw-metric-label">未映射地图</div>\n              </div>\n              <div class="dw-metric">\n                <div class="dw-metric-value">{{ runtime.diagnostics.orphanOverrideEntries.length }}</div>\n                <div class="dw-metric-label">失效覆盖</div>\n              </div>\n            </div>\n            <div v-if="runtime.diagnostics" class="dw-list">\n              <div v-if="runtime.diagnostics.unmanagedSamples.length" class="dw-list-item">\n                <div class="dw-item-main">未纳管条目样本</div>\n                <div class="dw-reasons">\n                  <div v-for="entry in runtime.diagnostics.unmanagedSamples" :key="`unmanaged-${entry}`" class="dw-reason">{{ entry }}</div>\n                </div>\n              </div>\n              <div v-if="runtime.diagnostics.unmappedMapEntries.length" class="dw-list-item">\n                <div class="dw-item-main">未建立映射的地图条目</div>\n                <div class="dw-reasons">\n                  <div v-for="entry in runtime.diagnostics.unmappedMapEntries" :key="`map-${entry}`" class="dw-reason">{{ entry }}</div>\n                </div>\n              </div>\n              <div v-if="runtime.diagnostics.unknownCharacterEntries.length" class="dw-list-item">\n                <div class="dw-item-main">未在当前红颜数据中找到的角色条目</div>\n                <div class="dw-reasons">\n                  <div v-for="entry in runtime.diagnostics.unknownCharacterEntries" :key="`character-${entry}`" class="dw-reason">{{ entry }}</div>\n                </div>\n              </div>\n              <div v-if="runtime.diagnostics.overrideConflicts.length || runtime.diagnostics.orphanOverrideEntries.length" class="dw-list-item">\n                <div class="dw-item-main">手动覆盖异常</div>\n                <div class="dw-reasons">\n                  <div v-for="entry in runtime.diagnostics.overrideConflicts" :key="`conflict-${entry}`" class="dw-reason">开启/关闭同时写入：{{ entry }}</div>\n                  <div v-for="entry in runtime.diagnostics.orphanOverrideEntries" :key="`orphan-${entry}`" class="dw-reason">世界书中未找到：{{ entry }}</div>\n                </div>\n              </div>\n            </div>\n            <div v-else class="dw-empty">还没有执行规则体检</div>\n          </section>\n\n          <section class="dw-card dw-card-span">\n            <div class="dw-card-title">测试沙盒</div>\n            <div class="dw-tip">先把当前上下文填进沙盒，再改区域、层级或消息文本做预演，就能提前看到会开哪些条目。</div>\n\n            <div class="dw-grid dw-inner-grid">\n              <label class="dw-field">\n                <span>测试区域</span>\n                <input v-model="sandboxRegion" class="text_pole" type="text" placeholder="例如：神木枯冢" />\n              </label>\n\n              <label class="dw-field">\n                <span>所属层级</span>\n                <input v-model="sandboxLayer" class="text_pole" type="text" placeholder="例如：东苍" />\n              </label>\n            </div>\n\n            <label class="dw-textarea">\n              <span>环境描述</span>\n              <textarea v-model="sandboxEnvironment" class="text_pole" rows="3" placeholder="例如：藤海深处，岁月灰烬飘散，木瘴弥漫。"></textarea>\n            </label>\n\n            <label class="dw-textarea">\n              <span>测试消息</span>\n              <textarea v-model="sandboxMessages" class="text_pole" rows="6" placeholder="每行一条消息，用来模拟最近上下文。"></textarea>\n            </label>\n\n            <div class="dw-actions">\n              <input class="menu_button" type="button" value="预演命中结果" :disabled="busy" @click="handleRunPreview" />\n              <input class="menu_button" type="button" value="用当前上下文填充" :disabled="busy" @click="hydrateSandboxFromRuntime" />\n            </div>\n\n            <template v-if="runtime.preview">\n              <div class="dw-subtitle">预演命中条目</div>\n              <div v-if="runtime.preview.matchedEntries.length" class="dw-tag-list">\n                <span v-for="entry in runtime.preview.matchedEntries" :key="`preview-${entry}`" class="dw-tag">{{ entry }}</span>\n              </div>\n              <div v-else class="dw-empty">这组上下文暂时没有命中可常亮条目</div>\n\n              <div class="dw-subtitle">预演评分明细</div>\n              <div v-if="runtime.preview.topScoredEntries.length" class="dw-list">\n                <div v-for="item in runtime.preview.topScoredEntries" :key="`preview-score-${item.name}-${item.score}`" class="dw-list-item">\n                  <div class="dw-item-head">\n                    <div class="dw-item-main">{{ item.name }}</div>\n                    <div class="dw-score-badge" :class="item.matched ? \'is-match\' : \'is-wait\'">\n                      {{ item.score }} / {{ item.threshold }}\n                    </div>\n                  </div>\n                  <div class="dw-item-sub">\n                    {{ item.category }} · {{ item.source === \'override\' ? \'手动覆盖\' : item.source === \'score\' ? \'评分决策\' : \'布尔规则\' }}\n                  </div>\n                  <div class="dw-reasons">\n                    <div v-for="reason in item.reasons" :key="`preview-reason-${item.name}-${reason}`" class="dw-reason">{{ reason }}</div>\n                  </div>\n                </div>\n              </div>\n              <div v-else class="dw-empty">还没有预演评分数据</div>\n            </template>\n          </section>\n\n          <section class="dw-card dw-card-span">\n            <div class="dw-card-title">当前常亮条目</div>\n            <div v-if="runtime.summary.activeEntries.length" class="dw-tag-list">\n              <span v-for="entry in runtime.summary.activeEntries.slice(0, 24)" :key="entry" class="dw-tag">{{ entry }}</span>\n            </div>\n            <div v-else class="dw-empty">暂无常亮条目快照</div>\n          </section>\n        </div>\n\n        <hr class="sysHR" />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { storeToRefs } from \'pinia\';\nimport { getRuntimeSnapshot, onRuntimeSnapshotChange, refreshRuntimeSnapshot, runManualRefresh, runPreviewSimulation, runRuntimeDiagnostics, type DynamicWorldbookPreviewInput } from \'./runtime\';\nimport { useSettingsStore } from \'./settings\';\n\nconst settingsStore = useSettingsStore();\nconst { settings } = storeToRefs(settingsStore);\n\nconst runtime = ref(getRuntimeSnapshot());\nconst busy = ref(false);\nconst sandboxRegion = ref(\'\');\nconst sandboxLayer = ref(\'\');\nconst sandboxEnvironment = ref(\'\');\nconst sandboxMessages = ref(\'\');\n\nconst bootStatusText = computed(() => {\n  const map = {\n    idle: \'待机\',\n    initializing: \'初始化中\',\n    ready: \'就绪\',\n    waiting_mvu: \'等待 MVU\',\n  } as const;\n  return map[runtime.value.bootStatus] ?? runtime.value.bootStatus;\n});\n\nconst mapDecisionEntries = computed(() =>\n  [...runtime.value.summary.decisionTraces]\n    .filter(item => item.category === \'地图\')\n    .sort((a, b) => b.score - a.score)\n    .slice(0, 8),\n);\n\nconst lastUpdatedAtText = computed(() => {\n  if (!runtime.value.lastUpdatedAt) return \'暂无\';\n  return new Date(runtime.value.lastUpdatedAt).toLocaleString();\n});\n\nconst parseEntryText = (value: string) =>\n  Array.from(\n    new Set(\n      value\n        .split(/\\r?\\n|,/)\n        .map(item => item.trim())\n        .filter(Boolean),\n    ),\n  );\n\nconst parseSandboxMessages = (value: string) =>\n  value\n    .split(/\\r?\\n/)\n    .map(item => item.trim())\n    .filter(Boolean);\n\nconst forcedEnableText = computed({\n  get: () => settings.value.forced_enable_entries.join(\'\\n\'),\n  set: value => {\n    settings.value.forced_enable_entries = parseEntryText(value);\n  },\n});\n\nconst forcedDisableText = computed({\n  get: () => settings.value.forced_disable_entries.join(\'\\n\'),\n  set: value => {\n    settings.value.forced_disable_entries = parseEntryText(value);\n  },\n});\n\nlet stopRuntimeSync = () => {};\n\nasync function withBusy(task: () => Promise<void>) {\n  if (busy.value) return;\n  busy.value = true;\n  try {\n    await task();\n  } finally {\n    busy.value = false;\n  }\n}\n\nasync function handleSyncRuntime() {\n  await withBusy(async () => {\n    runtime.value = await refreshRuntimeSnapshot();\n  });\n}\n\nasync function runEnableRefresh() {\n  await withBusy(async () => {\n    runtime.value = await runManualRefresh(\'enable\');\n  });\n}\n\nasync function runDisableRefresh() {\n  await withBusy(async () => {\n    runtime.value = await runManualRefresh(\'disable\');\n  });\n}\n\nasync function handleRunDiagnostics() {\n  await withBusy(async () => {\n    runtime.value = await runRuntimeDiagnostics();\n  });\n}\n\nfunction hydrateSandboxFromRuntime() {\n  sandboxRegion.value = runtime.value.context?.currentRegion || \'\';\n  sandboxLayer.value = runtime.value.context?.currentLayer || \'\';\n  sandboxEnvironment.value = runtime.value.context?.environmentDesc || \'\';\n  sandboxMessages.value = runtime.value.context?.recentMessages?.join(\'\\n\') || \'\';\n}\n\nasync function handleRunPreview() {\n  await withBusy(async () => {\n    const payload: DynamicWorldbookPreviewInput = {\n      currentRegion: sandboxRegion.value,\n      currentLayer: sandboxLayer.value,\n      environmentDesc: sandboxEnvironment.value,\n      recentMessages: parseSandboxMessages(sandboxMessages.value),\n    };\n    runtime.value = await runPreviewSimulation(payload);\n  });\n}\n\nfunction reloadSettings() {\n  settingsStore.reloadSettings();\n}\n\nfunction handleResetSettings() {\n  settingsStore.resetSettings();\n}\n\nonMounted(() => {\n  stopRuntimeSync = onRuntimeSnapshotChange(snapshot => {\n    runtime.value = snapshot;\n  });\n  void handleSyncRuntime().then(() => {\n    if (!sandboxRegion.value && !sandboxMessages.value) {\n      hydrateSandboxFromRuntime();\n    }\n  });\n});\n\nonUnmounted(() => {\n  stopRuntimeSync();\n});\n<\/script>\n\n<style scoped>\n.dynamic-worldbook-settings {\n  color: var(--SmartThemeBodyColor);\n}\n\n.dw-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 10px;\n}\n\n.dw-card {\n  padding: 14px;\n  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 68%, transparent);\n  border-radius: 14px;\n  background:\n    linear-gradient(180deg, color-mix(in srgb, var(--SmartThemeBlurTintColor) 90%, transparent) 0%, transparent 100%),\n    color-mix(in srgb, var(--SmartThemeQuoteColor) 9%, transparent);\n  box-shadow: inset 0 1px 0 color-mix(in srgb, white 8%, transparent);\n}\n\n.dw-card-span {\n  grid-column: 1 / -1;\n}\n\n.dw-inner-grid {\n  margin-top: 12px;\n}\n\n.dw-hero {\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, #e0a26f 18%, transparent), transparent 42%),\n    linear-gradient(180deg, color-mix(in srgb, var(--SmartThemeBlurTintColor) 92%, transparent) 0%, transparent 100%),\n    color-mix(in srgb, var(--SmartThemeQuoteColor) 10%, transparent);\n}\n\n.dw-card-title,\n.dw-subtitle {\n  font-weight: 700;\n}\n\n.dw-subtitle {\n  margin: 14px 0 8px;\n}\n\n.dw-status-row,\n.dw-actions,\n.dw-tag-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.dw-pill,\n.dw-tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 78%, transparent);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--SmartThemeQuoteColor) 12%, transparent);\n  font-size: 12px;\n}\n\n.dw-pill.is-ready,\n.dw-pill.is-on {\n  border-color: color-mix(in srgb, #72c59a 42%, var(--SmartThemeBorderColor));\n}\n\n.dw-pill.is-waiting_mvu,\n.dw-pill.is-busy {\n  border-color: color-mix(in srgb, #e1b56b 42%, var(--SmartThemeBorderColor));\n}\n\n.dw-pill.is-off {\n  border-color: color-mix(in srgb, #d07a7a 42%, var(--SmartThemeBorderColor));\n}\n\n.dw-meta-list {\n  display: grid;\n  gap: 6px;\n  margin-top: 10px;\n  opacity: 0.92;\n}\n\n.dw-toggle,\n.dw-field,\n.dw-textarea {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin: 10px 0;\n}\n\n.dw-toggle,\n.dw-field {\n  align-items: center;\n}\n\n.dw-toggle input[type=\'checkbox\'] {\n  margin-right: 8px;\n}\n\n.dw-field span {\n  flex: 0 0 110px;\n}\n\n.dw-field .text_pole {\n  flex: 1 1 auto;\n}\n\n.dw-textarea {\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.dw-textarea span {\n  font-weight: 600;\n}\n\n.dw-textarea textarea {\n  width: 100%;\n  min-height: 108px;\n  resize: vertical;\n}\n\n.dw-tip,\n.dw-error,\n.dw-empty,\n.dw-item-sub {\n  margin-top: 10px;\n  opacity: 0.88;\n}\n\n.dw-error {\n  color: color-mix(in srgb, #ff8d8d 72%, var(--SmartThemeBodyColor));\n}\n\n.dw-list {\n  display: grid;\n  gap: 8px;\n}\n\n.dw-list-item {\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 45%, transparent);\n  background: color-mix(in srgb, var(--SmartThemeQuoteColor) 7%, transparent);\n}\n\n.dw-item-main {\n  font-weight: 600;\n}\n\n.dw-item-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.dw-score-badge {\n  flex: 0 0 auto;\n  padding: 2px 10px;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);\n  font-size: 12px;\n}\n\n.dw-score-badge.is-match {\n  border-color: color-mix(in srgb, #72c59a 42%, var(--SmartThemeBorderColor));\n}\n\n.dw-score-badge.is-wait {\n  border-color: color-mix(in srgb, #d8a66d 42%, var(--SmartThemeBorderColor));\n}\n\n.dw-reasons {\n  display: grid;\n  gap: 4px;\n  margin-top: 8px;\n}\n\n.dw-reason {\n  opacity: 0.88;\n}\n\n.dw-metrics {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.dw-metric {\n  padding: 10px;\n  border-radius: 12px;\n  text-align: center;\n  background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 60%, transparent);\n}\n\n.dw-metric-value {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.dw-metric-label {\n  margin-top: 4px;\n  opacity: 0.82;\n}\n\n.dw-metrics-dense .dw-metric-value {\n  font-size: 18px;\n}\n\n@media (max-width: 900px) {\n  .dw-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .dw-card-span {\n    grid-column: auto;\n  }\n}\n</style>\n',
          ],
          sourceRoot: "",
        },
      ]);
      const i = o;
    },
    400(e, t, n) {
      var a = n(170);
      (a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals));
      (0, n(424).A)("d2966244", a, !1, { ssrId: !0 });
    },
    424(e, t, n) {
      function a(e, t) {
        for (var n = [], a = {}, r = 0; r < t.length; r++) {
          var s = t[r],
            o = s[0],
            i = { id: e + ":" + r, css: s[1], media: s[2], sourceMap: s[3] };
          a[o] ? a[o].parts.push(i) : n.push((a[o] = { id: o, parts: [i] }));
        }
        return n;
      }
      n.d(t, { A: () => f });
      var r = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !r)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var s = {},
        o = r && (document.head || document.getElementsByTagName("head")[0]),
        i = null,
        l = 0,
        c = !1,
        d = function () {},
        u = null,
        m = "data-vue-ssr-id",
        p =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function f(e, t, n, r) {
        ((c = n), (u = r || {}));
        var o = a(e, t);
        return (
          g(o),
          function (t) {
            for (var n = [], r = 0; r < o.length; r++) {
              var i = o[r];
              ((l = s[i.id]).refs--, n.push(l));
            }
            t ? g((o = a(e, t))) : (o = []);
            for (r = 0; r < n.length; r++) {
              var l;
              if (0 === (l = n[r]).refs) {
                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                delete s[l.id];
              }
            }
          }
        );
      }
      function g(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            a = s[n.id];
          if (a) {
            a.refs++;
            for (var r = 0; r < a.parts.length; r++) a.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) a.parts.push(w(n.parts[r]));
            a.parts.length > n.parts.length &&
              (a.parts.length = n.parts.length);
          } else {
            var o = [];
            for (r = 0; r < n.parts.length; r++) o.push(w(n.parts[r]));
            s[n.id] = { id: n.id, refs: 1, parts: o };
          }
        }
      }
      function v() {
        var e = document.createElement("style");
        return ((e.type = "text/css"), o.appendChild(e), e);
      }
      function w(e) {
        var t,
          n,
          a = document.querySelector("style[" + m + '~="' + e.id + '"]');
        if (a) {
          if (c) return d;
          a.parentNode.removeChild(a);
        }
        if (p) {
          var r = l++;
          ((a = i || (i = v())),
            (t = h.bind(null, a, r, !1)),
            (n = h.bind(null, a, r, !0)));
        } else
          ((a = v()),
            (t = y.bind(null, a)),
            (n = function () {
              a.parentNode.removeChild(a);
            }));
        return (
          t(e),
          function (a) {
            if (a) {
              if (
                a.css === e.css &&
                a.media === e.media &&
                a.sourceMap === e.sourceMap
              )
                return;
              t((e = a));
            } else n();
          }
        );
      }
      var b,
        E =
          ((b = []),
          function (e, t) {
            return ((b[e] = t), b.filter(Boolean).join("\n"));
          });
      function h(e, t, n, a) {
        var r = n ? "" : a.css;
        if (e.styleSheet) e.styleSheet.cssText = E(t, r);
        else {
          var s = document.createTextNode(r),
            o = e.childNodes;
          (o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(s, o[t]) : e.appendChild(s));
        }
      }
      function y(e, t) {
        var n = t.css,
          a = t.media,
          r = t.sourceMap;
        if (
          (a && e.setAttribute("media", a),
          u.ssrId && e.setAttribute(m, t.id),
          r &&
            ((n += "\n/*# sourceURL=" + r.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
    },
    492(e) {
      e.exports = function (e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            r =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                a,
              ),
            s = "/*# ".concat(r, " */");
          return [t].concat([s]).join("\n");
        }
        return [t].join("\n");
      };
    },
    502(e, t) {
      t.A = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [e, a] of t) n[e] = a;
        return n;
      };
    },
    748(e) {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = "",
                a = void 0 !== t[5];
              return (
                t[4] && (n += "@supports (".concat(t[4], ") {")),
                t[2] && (n += "@media ".concat(t[2], " {")),
                a &&
                  (n += "@layer".concat(
                    t[5].length > 0 ? " ".concat(t[5]) : "",
                    " {",
                  )),
                (n += e(t)),
                a && (n += "}"),
                t[2] && (n += "}"),
                t[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (t.i = function (e, n, a, r, s) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var o = {};
            if (a)
              for (var i = 0; i < this.length; i++) {
                var l = this[i][0];
                null != l && (o[l] = !0);
              }
            for (var c = 0; c < e.length; c++) {
              var d = [].concat(e[c]);
              (a && o[d[0]]) ||
                (void 0 !== s &&
                  (void 0 === d[5] ||
                    (d[1] = "@layer"
                      .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                      .concat(d[1], "}")),
                  (d[5] = s)),
                n &&
                  (d[2]
                    ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")),
                      (d[2] = n))
                    : (d[2] = n)),
                r &&
                  (d[4]
                    ? ((d[1] = "@supports ("
                        .concat(d[4], ") {")
                        .concat(d[1], "}")),
                      (d[4] = r))
                    : (d[4] = "".concat(r))),
                t.push(d));
            }
          }),
          t
        );
      };
    },
  },
  s = {};
function o(e) {
  var t = s[e];
  if (void 0 !== t) return t.exports;
  var n = (s[e] = { id: e, exports: {} });
  return (r[e](n, n.exports, o), n.exports);
}
((o.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return (o.d(t, { a: t }), t);
}),
  (o.d = (e, t) => {
    for (var n in t)
      o.o(t, n) &&
        !o.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
  (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (o.r = (e) => {
    ("undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 }));
  }));
var i = z,
  l = ["Sơ Kỳ", "Trung Kỳ", "Hậu Kỳ", "Đại Viên Mãn"],
  c = [
    "Luyện Khí",
    "Trúc Cơ",
    "Kim Đan",
    "Nguyên Anh",
    "Hóa Thần",
    "Luyện Hư",
    "Hợp Thể",
    "Đại Thừa",
    "Độ Kiếp",
    "Chân Tiên",
    "Tiên Vương",
    "Tiên Đế",
  ],
  d = [1, 1.18, 1.38, 1.6],
  u = [
    100, 160, 260, 420, 680, 1100, 1780, 2880, 4660, 7540, 12200, 19740,
  ].flatMap((e) => d.map((t) => Math.round(e * t))),
  m = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2880,
    3360, 3840, 4800, 5760, 6720, 7680, 9600, 11520, 13440, 15360, 19200, 23040,
    26880, 30720, 38400, 46080, 53760, 61440, 76800, 92160, 107520, 122880,
    153600, 184320, 215040, 245760, 307200, 368640, 430080, 491520, 614400,
    737280, 860160, 983040,
  ],
  p = {
    1: [
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2400,
      2400, 2400, 4800, 4800, 4800, 4800, 9600, 9600, 9600, 9600, 19200, 19200,
      19200, 19200, 38400, 38400, 38400, 38400, 76800, 76800, 76800, 76800,
      153600, 153600, 153600, 153600, 307200, 307200, 307200, 307200, 614400,
      614400, 614400, 614400,
    ],
    2: u,
    3: m,
  },
  f = [
    100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 1e3, 1e3, 1e3,
    1e3, 2e3, 2e3, 2e3, 2e3, 5e3, 5e3, 5e3, 5e3, 1e4, 1e4, 1e4, 1e4, 5e4, 5e4,
    5e4, 5e4, 1e5, 1e5, 1e5, 1e5, 5e5, 5e5, 5e5, 5e5, 2e6, 2e6, 2e6, 2e6, 1e7,
    1e7, 1e7, 1e7,
  ];
var g = {
    Phàm: "Phàm",
    "Phàm Giai": "Phàm",
    "Phàm Cấp": "Phàm",
    "Phàm Phẩm": "Phàm",
    Hoàng: "Hoàng",
    "Hoàng Giai": "Hoàng",
    "Hoàng Cấp": "Hoàng",
    "Hoàng Phẩm": "Hoàng",
    Huyền: "Huyền",
    "Huyền Giai": "Huyền",
    "Huyền Cấp": "Huyền",
    "Huyền Phẩm": "Huyền",
    dia: "Địa",
    "Địa Giai": "Địa",
    "Địa Cấp": "Địa",
    "Địa Phẩm": "Địa",
    Thiên: "Thiên",
    "Thiên Giai": "Thiên",
    "Thiên Cấp": "Thiên",
    "Thiên Phẩm": "Thiên",
    Tiên: "Tiên",
    "Tiên Giai": "Tiên",
    "Tiên Cấp": "Tiên",
    "Tiên Phẩm": "Tiên",
    Thánh: "Thánh",
    "Thánh Giai": "Thánh",
    "Thánh Cấp": "Thánh",
    "Thánh Phẩm": "Thánh",
    "Tiên Thiên": "Tiên Thiên",
    "Tiên Thiên Giai": "Tiên Thiên",
    "Tiên Thiên Cấp": "Tiên Thiên",
  },
  v = {
    "Nhập Môn": "Nhập Môn",
    "Sơ Cấp": "Nhập Môn",
    "Sơ Học": "Nhập Môn",
    "Tân Thủ": "Nhập Môn",
    "Thục Luyện": "Thục Luyện",
    "Trung Cấp": "Thục Luyện",
    "Nhàn Thục": "Thục Luyện",
    "Tiểu Thành": "Thục Luyện",
    "Tinh Thông": "Tinh Thông",
    "Cao Cấp": "Tinh Thông",
    "Tinh Trạm": "Tinh Thông",
    "Đại Thành": "Đại Thành",
    "Đại Sư": "Đại Thành",
    "Tông Sư": "Đại Thành",
    "Viên Mãn": "Viên Mãn",
    "Hoàn Mỹ": "Viên Mãn",
    "Cực Trí": "Viên Mãn",
    "Hóa Cảnh": "Hóa Cảnh",
    "Hóa Thần": "Hóa Cảnh",
    "Phản Phác Quy Chân": "Hóa Cảnh",
    "Xuất Thần Nhập Hóa": "Hóa Cảnh",
  };
var w = i.z.object({
    ten: i.z.string().prefault(""),
    mo_ta: i.z.string().prefault(""),
    pham_cap: i.z.string().prefault(""),
    so_luong: i.z.coerce
      .number()
      .transform((e) => Math.max(0, e))
      .prefault(1),
  }),
  b = new Set(["Linh Thạch", "Hạ Phẩm Linh Thạch"]);
function E(e) {
  return String(e ?? "")
    .trim()
    .replace(/\s+/g, "");
}
function h(e, t) {
  return [E(e), E(t?.ten)].filter(Boolean).some((e) => b.has(e));
}
function y(e, ...t) {
  let n = Number(e);
  (!Number.isFinite(n) || n < 0) && (n = 0);
  const a = t.map((e) => {
    const t = (function (e) {
      const t = {};
      let n = 0;
      for (const [a, r] of Object.entries(e ?? {}))
        if (r) {
          if (h(a, r)) {
            const e = Number(r.so_luong);
            Number.isFinite(e) && e > 0 && (n += e);
            continue;
          }
          t[a] = r;
        }
      return { inventory: t, spiritStone: n };
    })(e);
    return ((n += t.spiritStone), t.inventory);
  });
  return { spiritStone: n, inventories: a };
}
var A = {
    "Tu Luyện": "Tu Luyện",
    "Bế Quan": "Tu Luyện",
    "Tọa Thiền": "Tu Luyện",
    "Điều Tức": "Tu Luyện",
    "Bình Cảnh": "Bình Cảnh",
    "Bình Cảnh Kỳ": "Bình Cảnh",
    "Kẹt Ải": "Bình Cảnh",
    "Thụ Trở": "Bình Cảnh",
    "Đột Phá": "Đột Phá",
    "Xung Ải": "Đột Phá",
    "Phá Cảnh": "Đột Phá",
    thu_dot_pha: "Đột Phá",
    "Củng Cố": "Củng Cố",
    "Căn Cơ Chưa Vững": "Củng Cố",
    "Áp Cảnh": "Áp Cảnh",
    "Áp Chế Cảnh Giới": "Áp Cảnh",
    "Tàng Phong Dưỡng Cảnh": "Áp Cảnh",
  },
  C = {
    Không: "Không",
    "": "Không",
    "Chưa Đột Phá": "Không",
    "Thành Công": "Thành Công",
    "Phá Cảnh Thành Công": "Thành Công",
    "Vượt Qua": "Thành Công",
    "Thất Bại": "Thất Bại",
    "Phá Cảnh Thất Bại": "Thất Bại",
    "Xung Ải Thất Bại": "Thất Bại",
  },
  x = i.z
    .object({
      giai_doan: i.z
        .string()
        .transform((e) => A[String(e).trim()] || "Tu Luyện")
        .prefault("Tu Luyện"),
      nguyen_nhan_binh_canh: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      muc_tieu_dot_pha: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      ket_qua_truoc: i.z
        .string()
        .transform((e) => C[String(e).trim()] || "Không")
        .prefault("Không"),
    })
    .prefault({
      giai_doan: "Tu Luyện",
      nguyen_nhan_binh_canh: "",
      muc_tieu_dot_pha: "",
      ket_qua_truoc: "Không",
    });
function S(e) {
  const t = _.clamp(Math.floor(Number(e) || 1), 1, m.length),
    n = Math.floor((t - 1) / 4);
  return `${c[n] ?? "Luyện Khí"}${l[(t - 1) % 4] ?? "Sơ Kỳ"}`;
}
function B(e, t = 3) {
  const n = (function (e = 3) {
    if (!0 === e) return p[1];
    if (!1 === e) return p[3];
    const t = Math.max(1, Math.floor(Number(e) || 3));
    return p[t] ?? m;
  })(t);
  return n[_.clamp(Math.floor(Number(e) || 1), 1, n.length) - 1] ?? n[0] ?? 100;
}
function D(e, t, n = 1, a = 3) {
  const r = Number(t);
  if (!Number.isFinite(r) || r <= 0) return 0;
  const s = B(e, n),
    o = B(e, a);
  if (s <= 0 || s === o) return Math.round(r);
  const i = r / s,
    l = Math.round(i * o);
  return Math.max(0, l);
}
function N(e, t) {
  const n = x.parse(e ?? {}),
    a = B(t.level);
  let r = n.giai_doan;
  t.legacyAttemptBreakthrough || "Đột Phá" === r
    ? (r = "Đột Phá")
    : "Tu Luyện" === r && t.cultivation >= a && (r = "Bình Cảnh");
  const s = t.level < m.length ? S(t.level + 1) : n.muc_tieu_dot_pha,
    o = ["Bình Cảnh", "Đột Phá", "Áp Cảnh"].includes(r);
  return {
    giai_doan: r,
    nguyen_nhan_binh_canh: o ? n.nguyen_nhan_binh_canh : "",
    muc_tieu_dot_pha: o ? n.muc_tieu_dot_pha || s : "",
    ket_qua_truoc: n.ket_qua_truoc,
  };
}
var k = i.z
    .object({
      ten: i.z.string().prefault(""),
      mo_ta: i.z.string().prefault(""),
      loai: i.z
        .enum(["Công Pháp", "Thần Thông", "Bí Thuật"])
        .prefault("Thần Thông"),
      pham_cap: i.z
        .string()
        .transform((e) => g[e] || "Phàm")
        .catch("Phàm"),
      do_thuan_thuc: i.z
        .string()
        .transform((e) =>
          (function (e) {
            const t = String(e ?? "")
              .trim()
              .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
            return v[t]
              ? v[t]
              : t.includes("Tiểu Thành")
                ? "Thục Luyện"
                : t.includes("Trung Thành")
                  ? "Tinh Thông"
                  : t.includes("Đại Viên Mãn")
                    ? "Viên Mãn"
                    : "Nhập Môn";
          })(e),
        )
        .catch("Nhập Môn"),
      thoi_gian_linh_ngo: i.z.coerce.number().catch(() => Date.now()),
      cap_uy_luc: i.z.coerce.number().optional(),
    })
    .transform((e) => {
      if (!e.cap_uy_luc || 0 === e.cap_uy_luc) {
        const t = {
            "Nhập Môn": 1,
            "Thục Luyện": 2,
            "Tinh Thông": 3,
            "Đại Thành": 4,
            "Viên Mãn": 5,
            "Hóa Cảnh": 6,
          },
          n =
            {
              Phàm: 1,
              Hoàng: 2,
              Huyền: 3,
              dia: 4,
              Thiên: 5,
              Tiên: 6,
              Thánh: 7,
              "Tiên Thiên": 8,
            }[e.pham_cap] || 1,
          a = t[e.do_thuan_thuc] || 1;
        return { ...e, cap_uy_luc: 10 * n + a };
      }
      return e;
    }),
  V = i.z
    .record(i.z.string().describe("Tên vật phẩm"), w)
    .prefault({})
    .transform((e) => _.pickBy(e, ({ so_luong: e }) => e > 0));
function M(e, t = !1) {
  const n = e.cap_do,
    a = B(n),
    r = f[n - 1] ?? 100,
    s = {
      nguong_dot_pha: a,
      tuoi_tho_toi_da: r,
      mo_ta_canh_gioi: S(n),
      trang_thai_tuoi_tho: `${e.tuoi_tho_da_song}/${r}`,
      trang_thai: (function (e, t, n) {
        const a = e?.giai_doan || "Tu Luyện";
        return "Đột Phá" === a
          ? "Đột Phá"
          : "Củng Cố" === a
            ? "Củng Cố"
            : "Áp Cảnh" === a
              ? "Áp Cảnh"
              : "Bình Cảnh" === a || t >= n
                ? "Bình Cảnh Kỳ"
                : "Tu Luyện";
      })(e.trang_thai_tu_luyen, e.tu_vi, a),
      tien_do: `${(100 * (a > 0 ? _.clamp(e.tu_vi / a, 0, 1) : 0)).toFixed(1)}%`,
    };
  if (!t) return s;
  const o = (function (e) {
      const t = Math.floor((e - 1) / 4),
        n = (e - 1) % 4,
        a = Math.pow(10, t + 1),
        r = 0.2 * a * n;
      return Math.round(a + r);
    })(n),
    i = Object.values(e.danh_sach_than_thong || {}),
    l =
      o +
      (i.length > 0 ? Math.max(...i.map((e) => e.cap_uy_luc || 0)) : 0) +
      (() => {
        const t = e.the_chat || "";
        return t.includes("Thần")
          ? 500
          : t.includes("Thánh")
            ? 200
            : t.includes("Đạo")
              ? 100
              : t.includes("Linh")
                ? 50
                : 0;
      })();
  return { ...s, chien_luc: l };
}
var R = i.z.object({
    cap_do: i.z.coerce.number().transform((e) => _.clamp(e, 1, 48)),
    linh_can: i.z.string().describe("linh_can"),
    chat: i.z.string().describe("the_chat"),
    tuoi: i.z.string().describe("Tuổi"),
    thuoc_ve: i.z.string().describe("Thuộc về"),
    cong_phap: i.z.string().describe("Công Pháp"),
    binh_khi: i.z.string().describe("ban_menh_binh_khi"),
    than_thong: i.z.array(i.z.string()).prefault([]),
  }),
  T = i.z
    .object({
      cam_xuc_hien_tai: i.z.string().prefault(""),
      nguyen_nhan_thai_do: i.z.string().prefault(""),
      nguyen_vong_quan_he: i.z.string().prefault(""),
      ki_ki_tiep_xuc: i.z.string().prefault(""),
      hen_uoc_chua_hoan_thanh: i.z.string().prefault(""),
    })
    .prefault({}),
  U = i.z
    .object({
      cap_do: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 1, 48))
        .prefault(1),
      tu_vi: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      linh_can: i.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      the_chat: i.z.string().prefault("Phàm Thể"),
      cong_phap: i.z.string().prefault("Không"),
      ban_menh_binh_khi: i.z.string().prefault("Không"),
      danh_sach_than_thong: i.z
        .record(i.z.string().describe("Tên thần thông"), k)
        .prefault({}),
      linh_thach: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      tuoi_tho_da_song: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      thu_dot_pha: i.z.boolean().prefault(!1),
      trang_thai_tu_luyen: x,
      do_hao_cam: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, -200, 200))
        .prefault(0),
      quan_he: i.z.string().prefault("Người Lạ"),
      ngu_canh_quan_he: T,
    })
    .prefault({
      cap_do: 1,
      tu_vi: 0,
      linh_can: "Ngũ Hành Tạp Linh Căn",
      the_chat: "Phàm Thể",
      cong_phap: "Không",
      ban_menh_binh_khi: "Không",
      danh_sach_than_thong: {},
      linh_thach: 0,
      tuoi_tho_da_song: 0,
      thu_dot_pha: !1,
      trang_thai_tu_luyen: {
        giai_doan: "Tu Luyện",
        nguyen_nhan_binh_canh: "",
        muc_tieu_dot_pha: "",
        ket_qua_truoc: "Không",
      },
      do_hao_cam: 0,
      quan_he: "Người Lạ",
      ngu_canh_quan_he: {},
    })
    .transform((e) => {
      ((e.trang_thai_tu_luyen = N(e.trang_thai_tu_luyen, {
        legacyAttemptBreakthrough: e.thu_dot_pha,
        level: e.cap_do,
        cultivation: e.tu_vi,
      })),
        (e.thu_dot_pha = "Đột Phá" === e.trang_thai_tu_luyen.giai_doan));
      const t = M(e, !1);
      return { ...e, ...t };
    }),
  j = i.z.object({
    cap_do: i.z.coerce
      .number()
      .transform((e) => _.clamp(e, 1, 48))
      .prefault(1),
    tong_mon_dang_o: i.z.string().prefault("Tán Tu"),
    ghi_chu: i.z.string().prefault(""),
  }),
  F = {
    "Không Chiến Đấu": "Không Chiến Đấu",
    "Hòa Bình": "Không Chiến Đấu",
    "An Toàn": "Không Chiến Đấu",
    "Thoát Chiến": "Không Chiến Đấu",
    "Đối Trì": "Đối Trì",
    "Cảnh Giới": "Đối Trì",
    "Giằng Co": "Đối Trì",
    "Đối Thị": "Đối Trì",
    "Kịch Chiến": "Kịch Chiến",
    "Chiến Đấu": "Kịch Chiến",
    "Giao Chiến": "Kịch Chiến",
    "Sát Phạt": "Kịch Chiến",
    "Trọng Thương": "Trọng Thương",
    "Lâm Nguy": "Lâm Nguy",
    "Lâm Tử": "Lâm Nguy",
    "Thùy Nguy": "Lâm Nguy",
    "Nguy Cấp": "Lâm Nguy",
  },
  O = {
    "Vô Thương": "Vô Thương",
    Không: "Vô Thương",
    "Hoàn Hảo": "Vô Thương",
    "Khỏe Mạnh": "Vô Thương",
    "Khinh Thương": "Khinh Thương",
    "Tiểu Thương": "Khinh Thương",
    "Vi Thương": "Khinh Thương",
    "Trọng Thương": "Trọng Thương",
    "Đại Thương": "Trọng Thương",
    "Lâm Nguy": "Lâm Nguy",
    "Lâm Tử": "Lâm Nguy",
    "Thùy Nguy": "Lâm Nguy",
  },
  G = {
    "Nghiền Áp": "Nghiền Áp",
    "Áp Đảo": "Nghiền Áp",
    "Miểu Sát": "Nghiền Áp",
    "Điếu Đả": "Nghiền Áp",
    "Ưu Thế": "Ưu Thế",
    "Chiếm Ưu": "Ưu Thế",
    "Thượng Phong": "Ưu Thế",
    "Có Lợi": "Ưu Thế",
    "Thế Quân Lực Địch": "Thế Quân Lực Địch",
    "Quân Thế": "Thế Quân Lực Địch",
    "Hòa Nhau": "Thế Quân Lực Địch",
    "Tương Đương": "Thế Quân Lực Địch",
    "Kỳ Cổ Tương Đương": "Thế Quân Lực Địch",
    "Yếu Thế": "Yếu Thế",
    "Hạ Phong": "Yếu Thế",
    "Bất Lợi": "Yếu Thế",
    "Lạc Hậu": "Yếu Thế",
    "Tuyệt Vọng": "Tuyệt Vọng",
    "Tất Tử": "Tuyệt Vọng",
    "Nghiền Áp Yếu Thế": "Tuyệt Vọng",
    "Vô Vọng": "Tuyệt Vọng",
  },
  L = {
    "Hoàn Hảo": "Hoàn Hảo",
    "Vô Thương": "Hoàn Hảo",
    "Khỏe Mạnh": "Hoàn Hảo",
    "Toàn Thịnh": "Hoàn Hảo",
    "Khinh Thương": "Khinh Thương",
    "Tiểu Thương": "Khinh Thương",
    "Vi Thương": "Khinh Thương",
    "Trọng Thương": "Trọng Thương",
    "Đại Thương": "Trọng Thương",
    "Lâm Nguy": "Lâm Nguy",
    "Lâm Tử": "Lâm Nguy",
    "Thùy Nguy": "Lâm Nguy",
    "Đã Chết": "Đã Chết",
    "Tử Vong": "Đã Chết",
    "Kích Sát": "Đã Chết",
    "Trận Vong": "Đã Chết",
  },
  I = {
    Không: "Không",
    "": "Không",
    "Vô Kiếp": "Không",
    "Lôi Kiếp": "Lôi Kiếp",
    "Thiên Lôi": "Lôi Kiếp",
    "Tâm Kiếp": "Tâm Kiếp",
    "Tâm Ma": "Tâm Kiếp",
    "Ma Kiếp": "Tâm Kiếp",
    "Thiên Kiếp": "Thiên Kiếp",
    "Đại Kiếp": "Thiên Kiếp",
    "Tình Kiếp": "Tình Kiếp",
    "Tình Quan": "Tình Kiếp",
    "Nhân Quả Kiếp": "Nhân Quả Kiếp",
    "Nhân Quả": "Nhân Quả Kiếp",
    "Hồng Trần Kiếp": "Hồng Trần Kiếp",
    "Hồng Trần": "Hồng Trần Kiếp",
    "Luân Hồi Kiếp": "Luân Hồi Kiếp",
    "Luân Hồi": "Luân Hồi Kiếp",
  },
  P = {
    Không: "Không",
    "Vô Kiếp": "Không",
    "Tiểu Kiếp": "Tiểu Kiếp",
    Nhỏ: "Tiểu Kiếp",
    "Sơ Cấp": "Tiểu Kiếp",
    "Trung Kiếp": "Trung Kiếp",
    Trung: "Trung Kiếp",
    "Trung Cấp": "Trung Kiếp",
    "Đại Kiếp": "Đại Kiếp",
    Lớn: "Đại Kiếp",
    "Cao Cấp": "Đại Kiếp",
    "Thiên Phạt": "Thiên Phạt",
    Thiên: "Thiên Phạt",
    Cực: "Thiên Phạt",
    "Thiên Đạo": "Thiên Phạt",
  },
  H = {
    Không: "Không",
    "": "Không",
    "Chưa Độ Kiếp": "Không",
    "Thành Công": "Thành Công",
    "Thông Qua": "Thành Công",
    "Vượt Qua": "Thành Công",
    "Thất Bại": "Thất Bại",
    "Chưa Qua": "Thất Bại",
  },
  W = i.z
    .object({
      dang_chien_dau: i.z.boolean().prefault(!1),
      trang_thai_hien_tai: i.z
        .string()
        .transform((e) => F[e] || "Không Chiến Đấu")
        .prefault("Không Chiến Đấu"),
      chi_so_linh_luc: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 0, 100))
        .prefault(100),
      cap_do_thuong_the: i.z
        .string()
        .transform((e) => O[e] || "Vô Thương")
        .prefault("Vô Thương"),
      quan_bai_tay_da_dung: i.z.array(i.z.string()).prefault([]),
      so_hiep_chien_dau: i.z.coerce.number().prefault(0),
    })
    .prefault({
      dang_chien_dau: !1,
      trang_thai_hien_tai: "Không Chiến Đấu",
      chi_so_linh_luc: 100,
      cap_do_thuong_the: "Vô Thương",
      quan_bai_tay_da_dung: [],
      so_hiep_chien_dau: 0,
    }),
  Y = i.z.object({
    ten: i.z.string().prefault("Kẻ Địch Chưa Biết"),
    canh_gioi: i.z.string().prefault("Chưa Biết"),
    danh_gia_chien_luc: i.z
      .string()
      .transform((e) => G[e] || "Thế Quân Lực Địch")
      .prefault("Thế Quân Lực Địch"),
    trang_thai: i.z
      .string()
      .transform((e) => L[e] || "Hoàn Hảo")
      .prefault("Hoàn Hảo"),
    dac_diem: i.z.string().prefault(""),
  }),
  q = i.z
    .object({
      dang_do_kiep: i.z.boolean().prefault(!1),
      kiep_chung: i.z
        .string()
        .transform((e) => I[e] || "Không")
        .prefault("Không"),
      cap_do_kiep_nan: i.z
        .string()
        .transform((e) => P[e] || "Không")
        .prefault("Không"),
      giai_doan_hien_tai: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 0, 9))
        .prefault(0),
      tong_so_giai_doan: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 0, 9))
        .prefault(0),
      suc_chiu_dung_kiep_luc: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 0, 100))
        .prefault(100),
      phap_bao_ho_dao_da_dung: i.z.array(i.z.string()).prefault([]),
      mo_ta_kiep_nan: i.z.string().prefault(""),
      nguyen_nhan_kich_hoat: i.z.string().prefault(""),
      ket_qua_do_kiep_truoc: i.z
        .string()
        .transform((e) => H[e] || "Không")
        .prefault("Không"),
      thoi_gian_hoi_chieu_do_kiep: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      nhat_ky_phat_that_bai: i.z.string().prefault(""),
    })
    .prefault({
      dang_do_kiep: !1,
      kiep_chung: "Không",
      cap_do_kiep_nan: "Không",
      giai_doan_hien_tai: 0,
      tong_so_giai_doan: 0,
      suc_chiu_dung_kiep_luc: 100,
      phap_bao_ho_dao_da_dung: [],
      mo_ta_kiep_nan: "",
      nguyen_nhan_kich_hoat: "",
      ket_qua_do_kiep_truoc: "Không",
      thoi_gian_hoi_chieu_do_kiep: 0,
      nhat_ky_phat_that_bai: "",
    })
    .transform((e) =>
      e.dang_do_kiep
        ? {
            ...e,
            cap_do_kiep_nan:
              "Không" === e.cap_do_kiep_nan ? "Tiểu Kiếp" : e.cap_do_kiep_nan,
            giai_doan_hien_tai: _.clamp(e.giai_doan_hien_tai, 0, 9),
            tong_so_giai_doan: _.clamp(
              Math.max(e.tong_so_giai_doan || 3, e.giai_doan_hien_tai, 1),
              1,
              9,
            ),
          }
        : {
            ...e,
            kiep_chung: "Không",
            cap_do_kiep_nan: "Không",
            giai_doan_hien_tai: 0,
            tong_so_giai_doan: 0,
            mo_ta_kiep_nan: "",
            nguyen_nhan_kich_hoat: "",
          },
    ),
  Q = i.z
    .object({
      khu_vuc_hien_tai: i.z.string().prefault("Nơi Chưa Biết"),
      tang_cap_truc_thuoc: i.z.string().prefault("Địa Tầng"),
      mo_ta_moi_truong: i.z.string().prefault(""),
      muc_do_nguy_hiem: i.z.coerce.number().prefault(10),
      loi_di_kha_dung: i.z.array(i.z.string()).prefault([]),
      thong_tin_dan_duong: i.z.string().prefault(""),
    })
    .prefault({
      khu_vuc_hien_tai: "Nơi Chưa Biết",
      tang_cap_truc_thuoc: "Địa Tầng",
      mo_ta_moi_truong: "",
      muc_do_nguy_hiem: 10,
      loi_di_kha_dung: [],
      thong_tin_dan_duong: "",
    }),
  X = i.z
    .object({
      ho_ten: i.z.string().prefault("Vô Danh Thị"),
      tong_mon: i.z.string().prefault("Tán Tu"),
      xuat_than: i.z.string().prefault("Phàm Nhân"),
    })
    .prefault({
      ho_ten: "Vô Danh Thị",
      tong_mon: "Tán Tu",
      xuat_than: "Phàm Nhân",
    }),
  J = i.z
    .object({
      cap_do: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 1, 48))
        .prefault(1),
      tu_vi: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      linh_can: i.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      the_chat: i.z.string().prefault("Phàm Thể"),
      cong_phap: i.z.string().prefault("Không"),
      ban_menh_binh_khi: i.z.string().prefault("Không"),
      danh_sach_than_thong: i.z
        .record(i.z.string().describe("Tên thần thông"), k)
        .prefault({}),
      linh_thach: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      tuoi_tho_da_song: i.z.coerce
        .number()
        .transform((e) => Math.max(0, e))
        .prefault(0),
      thu_dot_pha: i.z.boolean().prefault(!1),
      trang_thai_tu_luyen: x,
      hanh_tung: Q,
      than_phan: X,
      tui_do: V,
      phap_bao: V,
      tui_tap_vat: V,
      trang_thai_chien_dau: W,
      ke_dich_hien_tai: i.z.array(Y).prefault([]),
      trang_thai_do_kiep: q,
    })
    .prefault({
      cap_do: 1,
      tu_vi: 0,
      linh_can: "Ngũ Hành Tạp Linh Căn",
      the_chat: "Phàm Thể",
      cong_phap: "Không",
      ban_menh_binh_khi: "Không",
      danh_sach_than_thong: {},
      linh_thach: 0,
      tuoi_tho_da_song: 0,
      thu_dot_pha: !1,
      trang_thai_tu_luyen: {
        giai_doan: "Tu Luyện",
        nguyen_nhan_binh_canh: "",
        muc_tieu_dot_pha: "",
        ket_qua_truoc: "Không",
      },
      hanh_tung: {
        khu_vuc_hien_tai: "Nơi Chưa Biết",
        tang_cap_truc_thuoc: "Địa Tầng",
        mo_ta_moi_truong: "",
        muc_do_nguy_hiem: 10,
        loi_di_kha_dung: [],
        thong_tin_dan_duong: "",
      },
      than_phan: {
        ho_ten: "Vô Danh Thị",
        tong_mon: "Tán Tu",
        xuat_than: "Phàm Nhân",
      },
      tui_do: {},
      phap_bao: {},
      tui_tap_vat: {},
      trang_thai_chien_dau: {
        dang_chien_dau: !1,
        trang_thai_hien_tai: "Không Chiến Đấu",
        chi_so_linh_luc: 100,
        cap_do_thuong_the: "Vô Thương",
        quan_bai_tay_da_dung: [],
        so_hiep_chien_dau: 0,
      },
      ke_dich_hien_tai: [],
      trang_thai_do_kiep: {
        dang_do_kiep: !1,
        kiep_chung: "Không",
        cap_do_kiep_nan: "Không",
        giai_doan_hien_tai: 0,
        tong_so_giai_doan: 0,
        suc_chiu_dung_kiep_luc: 100,
        phap_bao_ho_dao_da_dung: [],
        mo_ta_kiep_nan: "",
        nguyen_nhan_kich_hoat: "",
        ket_qua_do_kiep_truoc: "Không",
        thoi_gian_hoi_chieu_do_kiep: 0,
        nhat_ky_phat_that_bai: "",
      },
    })
    .transform((e) => {
      const t = y(e.linh_thach, e.tui_do, e.tui_tap_vat),
        [n, a] = t.inventories;
      ((e.linh_thach = t.spiritStone),
        (e.tui_do = n ?? {}),
        (e.tui_tap_vat = a ?? {}),
        (e.trang_thai_tu_luyen = N(e.trang_thai_tu_luyen, {
          legacyAttemptBreakthrough: e.thu_dot_pha,
          level: e.cap_do,
          cultivation: e.tu_vi,
        })),
        (e.thu_dot_pha = "Đột Phá" === e.trang_thai_tu_luyen.giai_doan));
      const r = M(e, !0);
      return { ...e, ...r };
    }),
  K = {
    "Đang Tiến Hành": "Đang Tiến Hành",
    "Tiến Hành": "Đang Tiến Hành",
    "Đang Xử Lý": "Đang Tiến Hành",
    "Chưa Hoàn Thành": "Đang Tiến Hành",
    "Chờ Hoàn Thành": "Đang Tiến Hành",
    "Chưa Bắt Đầu": "Đang Tiến Hành",
    "Đã Tiếp Nhận": "Đang Tiến Hành",
    "Tiếp Nhận": "Đang Tiến Hành",
    "Đang Tiến Hành": "Đang Tiến Hành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Hoàn Thành": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Đạt Được": "Đã Hoàn Thành",
    "Đạt Được": "Đã Hoàn Thành",
    "Đã Kết Thúc": "Đã Hoàn Thành",
    "Kết Thúc": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Thất Bại": "Đã Thất Bại",
    "Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
    "Trung Chỉ": "Đã Thất Bại",
    "Chung Chỉ": "Đã Thất Bại",
    "Buông Bỏ": "Đã Thất Bại",
    "Quá Hạn Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
  },
  L2 = {
    "Chính Tuyến": "Chính Tuyến",
    "Nhiệm Vụ Chính": "Chính Tuyến",
    "Nhiệm Vụ Chính Tuyến": "Chính Tuyến",
    main: "Chính Tuyến",
    "Chi Nhánh": "Chi Nhánh",
    "Nhiệm Vụ Chi Nhánh": "Chi Nhánh",
    side: "Chi Nhánh",
    sidequest: "Chi Nhánh",
    "Mỗi Ngày": "Mỗi Ngày",
    "Hằng Ngày": "Mỗi Ngày",
    "Nhiệm Vụ Mỗi Ngày": "Mỗi Ngày",
    daily: "Mỗi Ngày",
    "Lâm Nguy Thụ Mệnh": "Lâm Nguy Thụ Mệnh",
    "Khẩn Cấp": "Lâm Nguy Thụ Mệnh",
    "Nhiệm Vụ Khẩn Cấp": "Lâm Nguy Thụ Mệnh",
    urgent: "Lâm Nguy Thụ Mệnh",
    "Khám Phá Bí Cảnh": "Khám Phá Bí Cảnh",
    "Bí Cảnh": "Khám Phá Bí Cảnh",
    "Thám Hiểm": "Khám Phá Bí Cảnh",
    "Nhiệm Vụ Bí Cảnh": "Khám Phá Bí Cảnh",
    dungeon: "Khám Phá Bí Cảnh",
    "Tu Luyện": "Chi Nhánh",
    "Nhiệm Vụ Tu Luyện": "Chi Nhánh",
  },
  Q2 = i.z.object({
    ten: i.z.string().prefault(""),
    loai: i.z
      .string()
      .transform((e) => L2[String(e).trim()] || "Chi Nhánh")
      .prefault("Chính Tuyến"),
    muc_tieu: i.z.string().prefault(""),
    trang_thai: i.z
      .string()
      .transform((e) => K[String(e).trim()] || "Đang Tiến Hành")
      .prefault("Đang Tiến Hành"),
    thong_tin_bi_canh: i.z
      .object({
        vuc: i.z
          .enum([
            "Thiên Tầng",
            "Thần Châu",
            "Đông Thương",
            "Nam Viêm",
            "Tây Canh",
            "Bắc Minh",
            "Hạ Tầng",
            "Tứ Hải",
          ])
          .optional(),
        nguy: i.z.coerce
          .number()
          .transform((e) => _.clamp(e, 0, 100))
          .optional(),
        dac: i.z.string().optional(),
        phan_thuong: i.z
          .union([
            i.z.array(i.z.string()),
            i.z.string().transform((e) => (e ? [e] : [])),
          ])
          .prefault([]),
        gioi_han: i.z.string().optional(),
      })
      .optional(),
    thoi_gian_tao: i.z
      .union([i.z.coerce.number(), i.z.string().transform(() => Date.now())])
      .prefault(() => Date.now()),
  }),
  R2 = i.z.object({
    gia_tri: i.z.coerce
      .number()
      .transform((e) => _.clamp(e, -100, 100))
      .prefault(0),
    quan_he: i.z.string().prefault("Xa Lạ"),
    thoi_gian_cap_nhat: i.z.coerce.number().prefault(() => Date.now()),
  }),
  T2 = i.z
    .record(i.z.string().describe("Tên thế lực"), R2)
    .prefault({})
    .transform((e) =>
      _(e)
        .mapValues((e) => {
          const t = e.gia_tri;
          let n;
          n =
            t >= 80
              ? "Đồng Minh"
              : t >= 60
                ? "Thân Thiện"
                : t >= 30
                  ? "Hữu Hảo"
                  : t >= 10
                    ? "Thiên Hướng Trung Lập"
                    : t >= -10
                      ? "Trung Lập"
                      : t >= -30
                        ? "Trung Lập Ác Cảm"
                        : t >= -60
                          ? "Địch Đối"
                          : t >= -80
                            ? "Thù Hận"
                            : "Bất Tử Bất Hưu";
          const a = e.quan_he && "Xa Lạ" !== e.quan_he ? e.quan_he : n;
          return { ...e, quan_he: a };
        })
        .value(),
    ),
  W2 = {
    "Thám Hiểm": "Thám Hiểm",
    "Nhiệm Vụ": "Nhiệm Vụ",
    "Giao Dịch": "Giao Dịch",
    "Kết Giao": "Kết Giao",
    "Tranh Đoạt": "Tranh Đoạt",
    "Tu Luyện": "Tu Luyện",
    hong_nhan: "Hồng Nhan",
    "Ngẫu Nhiên": "Ngẫu Nhiên",
    "Hành Động": "Thám Hiểm",
    "Mạo Hiểm": "Thám Hiểm",
    "Hằng Ngày": "Nhiệm Vụ",
    "Tương Tác Hằng Ngày": "Hồng Nhan",
    "Chiến Đấu": "Tranh Đoạt",
    "Thách Thức": "Tranh Đoạt",
    "Xã Giao": "Kết Giao",
    "Tương Tác": "Kết Giao",
    "Yêu Ước": "Kết Giao",
    "Giải Hậu": "Kết Giao",
    "Cơ Duyên": "Thám Hiểm",
    "Cơ Ngộ": "Thám Hiểm",
    "Kỳ Ngộ": "Thám Hiểm",
    "Bí Cảnh": "Thám Hiểm",
    "Tầm Bảo": "Thám Hiểm",
    "Thải Cấu": "Giao Dịch",
    "Dịch Vật": "Giao Dịch",
    "Mua Bán": "Giao Dịch",
    "Ủy Thác": "Nhiệm Vụ",
    "Huyền Thưởng": "Nhiệm Vụ",
    "Lâm Nguy Thụ Mệnh": "Nhiệm Vụ",
    "Chi Nhánh": "Nhiệm Vụ",
    "Chính Tuyến": "Nhiệm Vụ",
    "Song Tu": "Hồng Nhan",
    "Thân Mật": "Hồng Nhan",
    "Trêu Ghẹo": "Hồng Nhan",
    random: "Ngẫu Nhiên",
  },
  X2 = [
    {
      type: "Hồng Nhan",
      pattern:
        /hong_nhan|Giai nhân|Đạo lữ|Song tu|Ôn tình|Ở một mình|Độc xứ|Tương ủng|Ôm nhau|Tương thủ|Bên nhau|Điều tình|Trêu ghẹo|Ghẹo nhau|Triền miên|Cộng tẩm|Ngủ chung|Đồng miên|Cùng ngủ|Vong Ưu|Thính Vũ|Thanh Huyền|Vãn Đường|Vân Thường|Mộng Yểu Linh|Sóc Ly Oanh|A Oanh|Huyết Thủ Phi Oanh|Sóc Vọng Thư|Xích Nguyệt Nữ Đế|U Ảnh Tông Chủ|Ngu Tịch|Ngu Nhan|Ngu Tịch Nhan|佳人|道侣|双修|温情|独处|相拥|相守|调情|缠绵|共寝|同眠|忘忧|听雨|清弦|晚棠|云裳|梦杳泠|朔璃鸢|阿鸢|血手飞鸢|朔望舒|赤月女帝|幽影宗主|虞汐|虞颜|虞汐颜/,
    },
    {
      type: "Tu Luyện",
      pattern:
        /Tu luyện|Bế quan|Tọa thiền|Điều tức|Thổ nạp|Xung ải|Phá cảnh|Đột phá|Áp cảnh|Củng cố|Ngộ đạo|Độ kiếp|Căn cơ|Đan dược|Linh trận|Tham ngộ|修炼|闭关|打坐|吐纳|冲关|破境|突破|压境|稳固|悟道|渡劫|根基|丹药|灵阵|参悟/,
    },
    {
      type: "Giao Dịch",
      pattern:
        /Phường thị|Dịch vật|Giao dịch|Mua bán|Thải cấu|Cực phẩm|Đan dược điếm|Đan dược pô|Thương hội|Bù đắp|Bán buôn|Thu mua|Hoán đổi|坊市|易物|交易|买卖|采购|拍卖|丹药铺|商会|补给|售卖|收购|置换/,
    },
    {
      type: "Tranh Đoạt",
      pattern:
        /Tranh đoạt|Đoạt lấy|Cướp đoạt|Kiếp sát|Đấu pháp|Tê sát|Vây công|Truy sát|Nghênh chiến|Cường địch|Ma tu|Xung đột|Thủ lôi|Tỷ đấu|争夺|夺取|抢夺|截杀|斗法|厮杀|围攻|追杀|迎战|强敌|魔修|冲突|守擂|比斗/,
    },
    {
      type: "Nhiệm Vụ",
      pattern:
        /Nhiệm vụ|Ủy thác|Huyền thưởng|Cầu viện|Hộ tống|Điều tra|Truy tra|Doanh cứu|Lâm nguy|Cấp báo|Thu vĩ|Thiện hậu|Phó ước|Phó mệnh|任务|委托|悬赏|求援|护送|调查|追查|营救|临危|急报|收尾|善后|赴约|赴命/,
    },
    {
      type: "Kết Giao",
      pattern:
        /Kết giao|Bái phỏng|Yêu ước|Hội diện|Kết thức|Lôi kéo|Thử thách|Cầu kiến|Phỏng hữu|Phó yến|Luận đạo|Đồng du|结交|拜访|邀约|会面|结识|拉拢|试探|求见|访友|赴宴|论道|同游/,
    },
    {
      type: "Ngẫu Nhiên",
      pattern:
        /Tùy duyên|Ngẫu nhiên|Thử vận may|Phó mặc cho trời|随缘|随机|碰运气|听天由命/,
    },
  ];
function xac_dinh_loai_hanh_dong(e, t) {
  const n = W2[e];
  if (n) return n;
  const a = Object.values(t)
    .map((e) =>
      (function (e) {
        return String(e ?? "").trim();
      })(e),
    )
    .filter(Boolean)
    .join("｜");
  for (const e of X2) if (e.pattern.test(a)) return e.type;
  return "Thám Hiểm";
}
var rr = i.z
    .object({
      ten: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      nguon_goc: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      loai: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault("Thám Hiểm"),
      mo_ta: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      ky_vong_thu_hoach: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      danh_gia_rui_ro: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .prefault(""),
      gioi_han_thoi_gian: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .optional(),
      su_kien_lien_quan: i.z.coerce
        .string()
        .transform((e) => String(e).trim())
        .optional(),
      muc_do_uu_tien: i.z.coerce
        .number()
        .transform((e) => _.clamp(e, 1, 5))
        .prefault(3),
    })
    .transform((e) => {
      const t = {
        ten: e.ten,
        nguon_goc: e.nguon_goc,
        mo_ta: e.mo_ta,
        ky_vong_thu_hoach: e.ky_vong_thu_hoach,
        danh_gia_rui_ro: e.danh_gia_rui_ro,
        gioi_han_thoi_gian: e.gioi_han_thoi_gian ?? "",
        su_kien_lien_quan: e.su_kien_lien_quan ?? "",
      };
      return { ...e, loai: xac_dinh_loai_hanh_dong(e.loai, t) };
    }),
  er = i.z
    .object({
      kich_hoat_nhac_nho_hanh_dong: i.z.boolean().prefault(!0),
      phien_ban_he_thong_tu_luyen: i.z.coerce.number().prefault(1),
      chu_ky_ghi_de_trang_thai_thu_cong: i.z.string().prefault(""),
    })
    .prefault({}),
  tr =
    (i.z
      .object({ kich_hoat_nhac_nho_hanh_dong: i.z.boolean().prefault(!0) })
      .prefault({}),
    {
      "Thuận Toại": "Thuận Toại",
      "Thụ Trở": "Thụ Trở",
      "Bình Ổn": "Bình Ổn",
      "Thuận Toại": "Thuận Toại",
      "Thụ Trở": "Thụ Trở",
      "Bình Ổn": "Bình Ổn",
    }),
  nr = i.z
    .object({
      thien_dao_cam_ung: i.z
        .string()
        .transform((e) => tr[String(e).trim()] || "Bình Ổn")
        .prefault("Bình Ổn"),
      canh_bao_ap_luc_moi_truong: i.z
        .string()
        .prefault(
          "Thiên đạo vận chuyển bình thường, vạn vật theo lý tự nhiên.",
        ),
      du_lieu_noi_bo: i.z
        .object({
          so_phien_ban: i.z.coerce.number().prefault(1),
          bao_ve_can_bang: i.z
            .object({
              bo_dem_lien_tuc_trac_tro: i.z.coerce.number().prefault(0),
              nguong_kich_hoat: i.z.coerce.number().prefault(3),
              so_hiep_con_hieu_luc: i.z.coerce.number().prefault(0),
              so_hiep_hoi_chieu: i.z.coerce.number().prefault(0),
            })
            .prefault({}),
          chien_luoc_dong: i.z
            .object({
              gioi_han_luong_thay_doi_mot_hiep: i.z.coerce
                .number()
                .prefault(0.15),
              toc_do_giam_tu_nhien: i.z.coerce.number().prefault(0.03),
              hiep_hoi_tang_truong: i.z.coerce.number().prefault(2),
            })
            .prefault({}),
          snapshot_ket_toan_do_kho: i.z
            .object({
              he_so_co_so_hiep: i.z.coerce.number().prefault(1),
              he_so_cuoi_cung: i.z.coerce.number().prefault(1),
              nguon_phan_tang: i.z
                .object({
                  tang_tu_su_the_gioi: i.z.coerce.number().prefault(1),
                  tang_so_thich_nguoi_choi: i.z.coerce.number().prefault(1),
                  tang_trang_thai_ngan_han: i.z.coerce.number().prefault(1),
                })
                .prefault({}),
            })
            .prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
  ar = i.z.object({
    dia: i.z.string().describe("Nơi ở"),
    dac: i.z.string().describe("Đặc điểm cốt lõi"),
    luc: i.z.string().describe("Chiến lực cao nhất"),
    doanh: i.z.enum(["Chính", "Ma", "Trung"]),
    mo: i.z.enum(["Siêu Lớn", "Lớn", "Nhỏ", "Vi", "Đặc Biệt"]),
  }),
  or = i.z.object({
    giai: i.z
      .string()
      .transform((e) => s[e] || "Phàm")
      .catch("Phàm"),
    tinh: i.z.string().describe("Thuộc tính"),
    hieu: i.z.string().describe("Hiệu quả"),
  }),
  cr = i.z
    .object({
      giai: i.z.enum([
        "Phàm Khí",
        "Pháp Khí",
        "Linh Khí",
        "Pháp Bảo",
        "Linh Bảo",
        "Tiên Khí",
        "Thánh Khí",
        "Đạo Khí",
        "Bản Mệnh",
      ]),
      loai: i.z.string().describe("Loại"),
      dac_tinh_ban_menh: i.z
        .string()
        .optional()
        .describe("Đặc tính độc nhất của Bản Mệnh Pháp Bảo"),
      khi_linh: i.z.string().optional().describe("Tên Khí Linh"),
    })
    .transform((e) => ({
      ...e,
      dac:
        "Bản Mệnh" === e.giai
          ? "Chí Tôn"
          : "Đạo Khí" === e.giai
            ? "Siêu Phàm"
            : "Thánh Khí" === e.giai
              ? "Cực Phẩm"
              : "Tiên Khí" === e.giai
                ? "Đỉnh Cấp"
                : "Linh Bảo" === e.giai
                  ? "Mạnh"
                  : "Pháp Bảo" === e.giai
                    ? "Trung"
                    : "Thường",
    })),
  ir = i.z.object({
    vuc: i.z.enum([
      "Thiên Tầng",
      "Thần Châu",
      "Đông Thương",
      "Nam Viêm",
      "Tây Canh",
      "Bắc Minh",
      "Hạ Tầng",
      "Tứ Hải",
    ]),
    loai: i.z.enum([
      "Bí Cảnh",
      "Thị Trấn",
      "Tông Môn",
      "Cấm Địa",
      "Di Tích",
      "Địa Hình",
    ]),
    nguy: i.z.coerce.number().transform((e) => _.clamp(e, 0, 100)),
    dac: i.z.string().describe("Đặc điểm"),
    tai_nguyen: i.z
      .union([
        i.z.array(i.z.string()),
        i.z.string().transform((e) => (e ? [e] : [])),
      ])
      .prefault([]),
  }),
  ur = i.z
    .object({
      chat: i.z.enum(["Liệt", "Hạ", "Trung", "Thượng", "Cực", "Thiên", "Dị"]),
      tinh: i.z.string().describe("Thuộc tính"),
      hiem: i.z.enum(["Thường", "Ít", "Hiếm", "Trân", "Truyền"]),
    })
    .transform((e) => ({
      ...e,
      toc:
        {
          Liệt: "0.3 lần",
          Hạ: "0.5 lần",
          Trung: "1 lần",
          Thượng: "2 lần",
          Cực: "3 lần",
          Thiên: "5 lần",
          Dị: "4 lần",
        }[e.chat] || "1 lần",
      dac:
        "Thiên" === e.chat
          ? "Đỉnh Cấp Đơn Hệ"
          : "Dị" === e.chat
            ? "Biến Dị Hiếm Có"
            : "Cực" === e.chat
              ? "Song Hệ Ưu Tú"
              : "Thông Thường",
    })),
  sr = i.z
    .object({
      chat: i.z.enum(["Phàm", "Linh", "Đạo", "Thánh", "Thần"]),
      dac: i.z.string().describe("Đặc tính"),
      hiem: i.z.enum(["Thường", "Ít", "Hiếm", "Trân", "Truyền"]),
    })
    .transform((e) => ({
      ...e,
      uu:
        "Thần" === e.chat
          ? "Chí Cao"
          : "Thánh" === e.chat
            ? "Cực Mạnh"
            : "Đạo" === e.chat
              ? "Mạnh"
              : "Linh" === e.chat
                ? "Trung"
                : "Không",
    })),
  lr = [
    { canonical: "Ngu Tịch Nhan", aliases: ["Ngu Tịch", "Ngu Nhan"] },
    { canonical: "Sóc Ly Oanh", aliases: ["A Oanh", "Huyết Thủ Phi Oanh"] },
    {
      canonical: "Sóc Vọng Thư",
      aliases: ["Xích Nguyệt Nữ Đế", "U Ảnh Tông Chủ"],
    },
  ],
  fr = U.parse({}),
  pr = /[\u3400-\u4dbf\u4e00-\u9fff]/;
function mr(e, t, n) {
  const a = String(e ?? "").trim();
  return a && a !== n ? a : t;
}
function zr(e) {
  const t = String(e ?? "").trim();
  if (!t) return "";
  const n =
      t
        .replace(
          /^(?:[A-Za-z][A-Za-z0-9]*)(?:[._:\-/\\\s]+[A-Za-z0-9]+)*[._:\-/\\\s]*/u,
          "",
        )
        .trim() || t,
    a = n.search(pr);
  return a < 0 ? "" : n.slice(a).trim();
}
function gr(e, t) {
  if (!e) return _.cloneDeep(t);
  const n = _.cloneDeep(e),
    a = _.cloneDeep(fr.ngu_canh_quan_he);
  ((n.cap_do = Math.max(
    Number(e.cap_do ?? fr.cap_do),
    Number(t.cap_do ?? fr.cap_do),
  )),
    (n.tu_vi = Math.max(
      Number(e.tu_vi ?? fr.tu_vi),
      Number(t.tu_vi ?? fr.tu_vi),
    )),
    (n.linh_thach = Math.max(
      Number(e.linh_thach ?? fr.linh_thach),
      Number(t.linh_thach ?? fr.linh_thach),
    )),
    (n.tuoi_tho_da_song = Math.max(
      Number(e.tuoi_tho_da_song ?? fr.tuoi_tho_da_song),
      Number(t.tuoi_tho_da_song ?? fr.tuoi_tho_da_song),
    )),
    (n.thu_dot_pha = Boolean(e.thu_dot_pha || t.thu_dot_pha)));
  const r = _.cloneDeep(fr.trang_thai_tu_luyen);
  return (
    (n.trang_thai_tu_luyen = N(
      {
        giai_doan: mr(
          t.trang_thai_tu_luyen?.giai_doan,
          String(e.trang_thai_tu_luyen?.giai_doan ?? r.giai_doan),
          r.giai_doan,
        ),
        nguyen_nhan_binh_canh: mr(
          t.trang_thai_tu_luyen?.nguyen_nhan_binh_canh,
          String(
            e.trang_thai_tu_luyen?.nguyen_nhan_binh_canh ??
              r.nguyen_nhan_binh_canh,
          ),
          r.nguyen_nhan_binh_canh,
        ),
        muc_tieu_dot_pha: mr(
          t.trang_thai_tu_luyen?.muc_tieu_dot_pha,
          String(e.trang_thai_tu_luyen?.muc_tieu_dot_pha ?? r.muc_tieu_dot_pha),
          r.muc_tieu_dot_pha,
        ),
        ket_qua_truoc: mr(
          t.trang_thai_tu_luyen?.ket_qua_truoc,
          String(e.trang_thai_tu_luyen?.ket_qua_truoc ?? r.ket_qua_truoc),
          r.ket_qua_truoc,
        ),
      },
      {
        legacyAttemptBreakthrough: n.thu_dot_pha,
        level: n.cap_do,
        cultivation: n.tu_vi,
      },
    )),
    (n.do_hao_cam = Number.isFinite(Number(t.do_hao_cam))
      ? Number(t.do_hao_cam)
      : Number(e.do_hao_cam ?? fr.do_hao_cam)),
    (n.quan_he = mr(t.quan_he, String(e.quan_he ?? fr.quan_he), fr.quan_he)),
    (n.ngu_canh_quan_he = {
      cam_xuc_hien_tai: mr(
        t.ngu_canh_quan_he?.cam_xuc_hien_tai,
        String(e.ngu_canh_quan_he?.cam_xuc_hien_tai ?? a.cam_xuc_hien_tai),
        a.cam_xuc_hien_tai,
      ),
      nguyen_nhan_thai_do: mr(
        t.ngu_canh_quan_he?.nguyen_nhan_thai_do,
        String(
          e.ngu_canh_quan_he?.nguyen_nhan_thai_do ?? a.nguyen_nhan_thai_do,
        ),
        a.nguyen_nhan_thai_do,
      ),
      nguyen_vong_quan_he: mr(
        t.ngu_canh_quan_he?.nguyen_vong_quan_he,
        String(
          e.ngu_canh_quan_he?.nguyen_vong_quan_he ?? a.nguyen_vong_quan_he,
        ),
        a.nguyen_vong_quan_he,
      ),
      ki_ki_tiep_xuc: mr(
        t.ngu_canh_quan_he?.ki_ki_tiep_xuc,
        String(e.ngu_canh_quan_he?.ki_ki_tiep_xuc ?? a.ki_ki_tiep_xuc),
        a.ki_ki_tiep_xuc,
      ),
      hen_uoc_chua_hoan_thanh: mr(
        t.ngu_canh_quan_he?.hen_uoc_chua_hoan_thanh,
        String(
          e.ngu_canh_quan_he?.hen_uoc_chua_hoan_thanh ??
            a.hen_uoc_chua_hoan_thanh,
        ),
        a.hen_uoc_chua_hoan_thanh,
      ),
    }),
    String(e.linh_can ?? fr.linh_can) === fr.linh_can &&
      String(t.linh_can ?? "").trim() &&
      (n.linh_can = t.linh_can),
    String(e.the_chat ?? fr.the_chat) === fr.the_chat &&
      String(t.the_chat ?? "").trim() &&
      (n.the_chat = t.the_chat),
    String(e.cong_phap ?? fr.cong_phap) === fr.cong_phap &&
      String(t.cong_phap ?? "").trim() &&
      (n.cong_phap = t.cong_phap),
    String(e.ban_menh_binh_khi ?? fr.ban_menh_binh_khi) ===
      fr.ban_menh_binh_khi &&
      String(t.ban_menh_binh_khi ?? "").trim() &&
      (n.ban_menh_binh_khi = t.ban_menh_binh_khi),
    (n.danh_sach_than_thong = {
      ...(e.danh_sach_than_thong ?? {}),
      ...(t.danh_sach_than_thong ?? {}),
    }),
    n
  );
}
function br(e, t) {
  return e
    ? {
        cap_do: Math.max(Number(e.cap_do ?? 1), Number(t.cap_do ?? 1)),
        linh_can: mr(t.linh_can, String(e.linh_can ?? ""), ""),
        chat: mr(t.chat, String(e.chat ?? ""), ""),
        tuoi: mr(t.tuoi, String(e.tuoi ?? ""), ""),
        thuoc_ve: mr(t.thuoc_ve, String(e.thuoc_ve ?? ""), ""),
        cong_phap: mr(t.cong_phap, String(e.cong_phap ?? ""), ""),
        binh_khi: mr(t.binh_khi, String(e.binh_khi ?? ""), ""),
        than_thong: Array.from(
          new Set(
            [...(e.than_thong ?? []), ...(t.than_thong ?? [])]
              .map((e) => String(e).trim())
              .filter(Boolean),
          ),
        ),
      }
    : _.cloneDeep(t);
}
function dr(e) {
  const t = Math.max(0, Number.isFinite(e) ? e : 0);
  return t <= 20 ? 6 : t <= 60 ? 4 : t <= 120 ? 3 : 2;
}
function hr(e, t) {
  (t < 3 && (e.tu_vi = D(e.cap_do, e.tu_vi, t, 3)),
    (e.trang_thai_tu_luyen = N(e.trang_thai_tu_luyen, {
      legacyAttemptBreakthrough: e.thu_dot_pha,
      level: e.cap_do,
      cultivation: e.tu_vi,
    })),
    (e.thu_dot_pha = "Đột Phá" === e.trang_thai_tu_luyen.giai_doan),
    Object.assign(e, M(e, !1)));
}
var _r = i.z
    .object({
      dong_ho_the_gioi: i.z
        .object({
          ky_nguyen: i.z.string().prefault("Thời Đại Mạt Pháp"),
          nam: i.z.coerce.number().prefault(1),
          thang: i.z.coerce
            .number()
            .transform((e) => _.clamp(e, 1, 12))
            .prefault(1),
          ngay: i.z.coerce
            .number()
            .transform((e) => _.clamp(e, 1, 30))
            .prefault(1),
          gio: i.z.string().prefault("Giờ Tý"),
        })
        .prefault({
          ky_nguyen: "Thời Đại Mạt Pháp",
          nam: 1,
          thang: 1,
          ngay: 1,
          gio: "Giờ Tý",
        }),
      ban_do_the_gioi: i.z
        .record(
          i.z.string().describe("Tên khu vực"),
          i.z.object({
            layer: i.z
              .enum(["Thiên Tầng", "Địa Tầng", "Hạ Tầng"])
              .prefault("Địa Tầng"),
            danger: i.z.coerce.number().transform((e) => _.clamp(e, 0, 100)),
            desc: i.z.string().prefault(""),
            connections: i.z.array(i.z.string()).prefault([]),
          }),
        )
        .prefault({}),
      dia_chi_the_gioi: i.z
        .record(
          i.z.string().describe("Tên sự kiện"),
          i.z.object({
            trang_thai: i.z.string().prefault(""),
            su_kien: i.z.string().prefault(""),
          }),
        )
        .prefault({}),
      kho_the_luc_tong_mon: i.z
        .record(i.z.string().describe("Tên tông môn"), ar)
        .prefault({}),
      kho_cong_phap: i.z
        .record(i.z.string().describe("Tên công pháp"), or)
        .prefault({}),
      kho_phap_bao: i.z
        .record(i.z.string().describe("Tên pháp bảo"), cr)
        .prefault({
          "Trấn Uyên Kiếm": { giai: "Tiên Khí", loai: "Kiếm" },
          "Song Ngư Bội": {
            giai: "Bản Mệnh",
            loai: "Ngọc Bội",
            dac_tinh_ban_menh:
              "Khế ước nguồn máu, Âm Dương song sinh, Khí linh hóa hình, Cùng chủ cộng tu, Sinh tử tương y, Khóa máu hộ chủ",
            khi_linh: "Ngu Tịch Nhan",
          },
        }),
      kho_dia_diem: i.z
        .record(i.z.string().describe("Tên địa điểm"), ir)
        .prefault({
          "Thiên Uyên": {
            vuc: "Thiên Tầng",
            loai: "Cấm Địa",
            nguy: 95,
            dac: "Khe Nứt Tinh Thần",
            tai_nguyen: ["Mảnh Tinh Thần", "Vẫn Thiết"],
          },
          "Găng Phong Đới": {
            vuc: "Thiên Tầng",
            loai: "Cấm Địa",
            nguy: 90,
            dac: "Bình Chướng Găng Phong",
            tai_nguyen: ["Tinh Hoa Găng Phong"],
          },
          "Vấn Đạo Phong": {
            vuc: "Thần Châu",
            loai: "Tông Môn",
            nguy: 10,
            dac: "Vạn Pháp Tông",
            tai_nguyen: ["Công Pháp", "Linh Dược"],
          },
          "Kiếm Môn Quan": {
            vuc: "Thần Châu",
            loai: "Tông Môn",
            nguy: 15,
            dac: "Kiếm Các",
            tai_nguyen: ["Kiếm Ý", "Phi Kiếm"],
          },
          "Tạng Thư Các": {
            vuc: "Thần Châu",
            loai: "Tông Môn",
            nguy: 5,
            dac: "Cổ Tịch",
            tai_nguyen: ["Công Pháp", "Bí Thuật"],
          },
          "Phong Đô Thành": {
            vuc: "Thần Châu",
            loai: "Thành Trấn",
            nguy: 30,
            dac: "Quỷ Thị",
            tai_nguyen: ["Tài Liệu U Minh"],
          },
          "Long Môn Thác": {
            vuc: "Thần Châu",
            loai: "Bí Cảnh",
            nguy: 40,
            dac: "Hóa Long",
            tai_nguyen: ["Long Khí"],
          },
          "Kiến Mộc Lâm": {
            vuc: "Đông Thương",
            loai: "Địa Hình",
            nguy: 50,
            dac: "Cổ Thụ Tinh",
            tai_nguyen: ["Linh Mộc", "Yêu Đan"],
          },
          "Lăng Thanh Đế": {
            vuc: "Đông Thương",
            loai: "Di Tích",
            nguy: 85,
            dac: "Truyền Thừa Thanh Đế",
            tai_nguyen: ["Truyền Thừa Thanh Đế"],
          },
          "Bách Hoa Cảnh": {
            vuc: "Đông Thương",
            loai: "Bí Cảnh",
            nguy: 20,
            dac: "Biển Hoa",
            tai_nguyen: ["Linh Hoa"],
          },
          "Bất Diệt Hỏa Sơn": {
            vuc: "Nam Viêm",
            loai: "Địa Hình",
            nguy: 80,
            dac: "Chu Tước Niết Bàn",
            tai_nguyen: ["Chu Tước Hỏa"],
          },
          "Niết Bàn Đài": {
            vuc: "Nam Viêm",
            loai: "Di Tích",
            nguy: 70,
            dac: "Niết Bàn",
            tai_nguyen: ["Niết Bàn Cảm Ngộ"],
          },
          "Vạn Kiếm Trủng": {
            vuc: "Tây Canh",
            loai: "Cấm Địa",
            nguy: 85,
            dac: "Kiếm Ý",
            tai_nguyen: ["Kiếm Ý", "Cổ Kiếm"],
          },
          "Huyền Băng Sơn": {
            vuc: "Bắc Minh",
            loai: "Tông Môn",
            nguy: 50,
            dac: "Huyền Vũ Tông",
            tai_nguyen: ["Huyền Băng"],
          },
          "Quy Khương Nhãn": {
            vuc: "Bắc Minh",
            loai: "Cấm Địa",
            nguy: 99,
            dac: "Quy Khương",
            tai_nguyen: ["Quy Khương Cảm Ngộ"],
          },
          "Hoàng Tuyền Tích": {
            vuc: "Hạ Tầng",
            loai: "Di Tích",
            nguy: 90,
            dac: "U Minh",
            tai_nguyen: ["Hoàng Tuyền Thủy"],
          },
          "Viêm Uyên": {
            vuc: "Hạ Tầng",
            loai: "Cấm Địa",
            nguy: 95,
            dac: "Địa Tâm Hỏa",
            tai_nguyen: ["Địa Tâm Hỏa"],
          },
        }),
      tong_mon_suy_doan: i.z
        .object({
          vuc_hien_tai: i.z.string().prefault(""),
          the_luc_chinh_hien_tai: i.z.string().prefault(""),
        })
        .prefault({ vuc_hien_tai: "", the_luc_chinh_hien_tai: "" }),
      kho_linh_can: i.z
        .record(i.z.string().describe("Tên linh căn"), ur)
        .prefault({}),
      kho_the_chat: i.z
        .record(i.z.string().describe("Tên thể chất"), sr)
        .prefault({}),
      ban_ton: J,
      kho_nhan_vat_hong_nhan: i.z
        .record(i.z.string().describe("Tên nhân vật"), R)
        .prefault({
          "Hứa Thính Vũ": {
            cap_do: 33,
            linh_can: "Thủy Bản Nguyên Thiên",
            chat: "Quy Khương Thần Thể",
            tuoi: "Ngoại 26 Thực 12000",
            thuoc_ve: "Quy Khương Chi Chủ",
            cong_phap: "Vạn Thủy Quy Nguyên Tiên Thiên",
            binh_khi: "Thương Hải Di Châu Tiên Thiên",
            than_thong: [
              "Quy Khương Ca",
              "Nghịch Lưu Hư Vọng",
              "Tịch Diệt Hải Vực",
              "Vạn Thủy Đồng Nguyên",
            ],
          },
          "Ngu Tịch Nhan": {
            cap_do: 12,
            linh_can: "Thủy Âm Dương Dị",
            chat: "Song Ngư Thể",
            tuoi: "Hóa Hình 0 Năm",
            thuoc_ve: "{{user}} Ngọc Bội",
            cong_phap: "Song Sinh Thiên Cực / Âm Dương",
            binh_khi: "Song Ngư Bội Bản Thể",
            than_thong: ["Khô Mộc Xuân", "Đoạt Mệnh Trang", "Song Ngư Mộng"],
          },
          "Bạch Thanh Huyền": {
            cap_do: 29,
            linh_can: "Kim Thiên Căn",
            chat: "Kiếm Thể",
            tuoi: "Ngoại 30 Thực 1000+",
            thuoc_ve: "Tán Tu Kiếm Tông Sư",
            cong_phap: "Kiếm Ý Tiên / Thiên Âm Thiên",
            binh_khi: "Thanh Huyền Cầm Kiếm Linh Bảo",
            than_thong: ["Cầm Kiếm Sát", "Kiếm Ý Ca", "Vạn Kiếm Tâm"],
          },
          "Nam Cung Vân Thường": {
            cap_do: 16,
            linh_can: "Hỏa Thiên Căn",
            chat: "Thần Hoàng Đạo Thể",
            tuoi: "Ngoại 10 Thực 118",
            thuoc_ve: "Đại Hạ Thê Phượng Cung Chủ",
            cong_phap: "Cửu Chuyển Niết Bàn Tiên",
            binh_khi: "Thê Ngô Trâm Linh Bảo",
            than_thong: [
              "Nam Minh Ly Hỏa",
              "Hoàng Uy Trấn Thế",
              "Vũ Hóa Hư Không",
            ],
          },
          "Mộng Yểu Linh": {
            cap_do: 23,
            linh_can: "Thụy Thú Dị Căn",
            chat: "Thừa Hoàng Thánh Thể",
            tuoi: "Ngoại 8 Thực Vạn Năm+",
            thuoc_ve: "Không (Mạt Đại Thừa Hoàng)",
            cong_phap: "Thừa Hoàng Bản Nguyên Thiên",
            binh_khi: "Không",
            than_thong: [
              "Thụy Quang Tí Hữu",
              "Linh Giác Thông Minh",
              "Bản Nguyên Bộc Phát",
            ],
          },
          "Nguyễn Vong Ưu": {
            cap_do: 44,
            linh_can: "Nhân Quả Đại Đạo Bản Nguyên",
            chat: "Vạn Pháp Bất Xâm Chi Thể",
            tuoi: "Nhị Bát Phương Hoa / Lịch Kiếp Vạn Tải",
            thuoc_ve: "Tiên Giới Tiên Vương (Phàm Giới Ngụy Trang)",
            cong_phap: "Nhân Quả Đại Đạo",
            binh_khi: "Không (Vạn Vật Giai Binh)",
            than_thong: [
              "Khái Niệm Mạt Trừ",
              "Nhân Quả Soán Cải",
              "Tiên Vương Uy Áp",
              "Trùng Sóc Kỷ Nguyên",
            ],
          },
          "Vãn Đường": {
            cap_do: 15,
            linh_can: "U Minh Linh Căn",
            chat: "Phệ Hồn Chi Thể",
            tuoi: "Chưa Biết",
            thuoc_ve: "Tán Tu",
            cong_phap: "U Minh Quy Hồn Kinh Thiên",
            binh_khi: "Dẫn Hồn Linh Linh Bảo",
            than_thong: [
              "Minh Hà Chỉ Dẫn",
              "Minh Liên Trầm Mộng",
              "Quy Hồn Bài Chu",
            ],
          },
          "Sóc Ly Oanh": {
            cap_do: 4,
            linh_can: "Dị Biến Phong Linh Căn",
            chat: "Quế Phách Linh Lung Thể",
            tuoi: "Ngoại 16 Thực 16",
            thuoc_ve: "Tây Canh Quỳnh Luân Thùy Diệu Cung Ly Tông Thiên Kim",
            cong_phap: "Toái Tinh U Ảnh Quyết Tàn Thiên",
            binh_khi: "Toái Tinh Song Nhẫn",
            than_thong: ["Yến Hồi Thiểm"],
          },
          "Sóc Vọng Thư": {
            cap_do: 32,
            linh_can: "Hạo Nguyệt Dị Linh Căn",
            chat: "Hạo Nguyệt U Vi Thể",
            tuoi: "Ngoại 20 Thực 2000+",
            thuoc_ve: "Tây Canh Quỳnh Luân Thùy Diệu Cung Cung Chủ",
            cong_phap: "Xích Uyên Trấn Thế Huyết Nguyệt Quyết",
            binh_khi: "Sương Phách Cực Phẩm Linh Bảo",
            than_thong: [
              "Nguyệt Ánh Thiên Cơ",
              "Xích Nguyệt Chiêu Tâm",
              "Nguyệt Hoa Phong Cấm",
              "Huyết Nguyệt Trấn Hồn",
              "Vạn Ảnh Quy Tông",
            ],
          },
        }),
      hong_nhan: i.z
        .record(i.z.string().describe("Tên hồng nhan"), U)
        .prefault({}),
      npc_do_giam: i.z.record(i.z.string().describe("Tên NPC"), j).prefault({}),
      danh_sach_nhiem_vu: i.z
        .record(i.z.string().describe("ID nhiệm vụ"), Q2)
        .prefault({})
        .transform((e) =>
          _(e)
            .pickBy((e, t) => !!e && !!String(t).trim())
            .mapValues((e, t) => {
              return {
                ...e,
                ten:
                  zr(e.ten) ||
                  zr(t) ||
                  ((n = e.loai),
                  {
                    "Chính Tuyến": "Nhiệm Vụ Chính Tuyến",
                    "Chi Nhánh": "Nhiệm Vụ Chi Nhánh",
                    "Mỗi Ngày": "Nhiệm Vụ Mỗi Ngày",
                    "Lâm Nguy Thụ Mệnh": "Lâm Nguy Thụ Mệnh",
                    "Khám Phá Bí Cảnh": "Khám Phá Bí Cảnh",
                  }[String(n ?? "").trim()] || "Nhiệm Vụ Chưa Đặt Tên"),
              };
              var n;
            })
            .pickBy((e) => "Đang Tiến Hành" === e.trang_thai)
            .value(),
        ),
      he_thong_danh_vong: T,
      he_thong_do_kho: nr,
      co_ngo_co_the_tham_gia: i.z
        .array(rr)
        .prefault([])
        .transform((e) => e.filter((e) => !!e.ten)),
      hoan_canh_hien_tai: i.z.string().prefault(""),
      cai_dat_he_thong: er,
      snapshot_do_hao_cam: i.z
        .record(
          i.z.string().describe("Tên hồng nhan"),
          i.z.coerce.number().transform((e) => _.clamp(e, -200, 200)),
        )
        .prefault({}),
    })
    .transform((e) => {
      e.kho_nhan_vat_hong_nhan = (function (e) {
        const t = _.cloneDeep(e ?? {});
        for (const { canonical: e, aliases: n } of lr) {
          let a = t[e] ? _.cloneDeep(t[e]) : void 0;
          for (const e of n) {
            const n = t[e];
            n && ((a = br(a, n)), delete t[e]);
          }
          a && (t[e] = a);
        }
        return t;
      })(e.kho_nhan_vat_hong_nhan ?? {});
      const t = (function (e, t) {
        const n = _.cloneDeep(e ?? {}),
          a = _.cloneDeep(t ?? {});
        for (const { canonical: e, aliases: t } of lr) {
          let r = n[e] ? _.cloneDeep(n[e]) : void 0;
          for (const e of t) {
            const t = n[e];
            t && ((r = gr(r, t)), delete n[e]);
          }
          r && (n[e] = r);
          const s = [a[e], ...t.map((e) => a[e])]
            .map((e) => Number(e))
            .filter((e) => Number.isFinite(e));
          for (const e of t) delete a[e];
          s.length > 0 && (a[e] = s[s.length - 1]);
        }
        return { companions: n, snapshot: a };
      })(e.hong_nhan ?? {}, e.snapshot_do_hao_cam ?? {});
      ((e.hong_nhan = t.companions), (e.snapshot_do_hao_cam = t.snapshot));
      const n = Math.max(
        1,
        Math.floor(
          Number(e.cai_dat_he_thong?.phien_ban_he_thong_tu_luyen ?? 1) || 1,
        ),
      );
      !(function (e, t) {
        (t < 3 && (e.tu_vi = D(e.cap_do, e.tu_vi, t, 3)),
          (e.trang_thai_tu_luyen = y(e.trang_thai_tu_luyen, {
            legacyAttemptBreakthrough: e.thu_dot_pha,
            level: e.cap_do,
            cultivation: e.tu_vi,
          })),
          (e.thu_dot_pha = "Đột Phá" === e.trang_thai_tu_luyen.giai_doan),
          Object.assign(e, D(e, !0)));
      })(e.ban_ton, n);
      for (const t of Object.values(e.hong_nhan ?? {})) hr(t, n);
      e.cai_dat_he_thong = {
        ...(e.cai_dat_he_thong ?? {}),
        phien_ban_he_thong_tu_luyen: 3,
        chu_ky_ghi_de_trang_thai_thu_cong: String(
          e.cai_dat_he_thong?.chu_ky_ghi_de_trang_thai_thu_cong ?? "",
        ),
      };
      const a = _.cloneDeep(e.snapshot_do_hao_cam ?? {});
      for (const [t, n] of Object.entries(e.hong_nhan ?? {})) {
        const e = Number(n?.do_hao_cam);
        if (!Number.isFinite(e)) continue;
        const r = Number(a[t]);
        if (Number.isFinite(r)) {
          const t = dr(r);
          n.do_hao_cam = _.clamp(e, r - t, r + t);
        } else n.do_hao_cam = _.clamp(e, -200, 200);
        a[t] = n.do_hao_cam;
      }
      return (
        (e.snapshot_do_hao_cam = _.pickBy(a, (t, n) => _.has(e.hong_nhan, n))),
        e
      );
    }),
  _e = ["Thiên Tầng", "Địa Tầng", "Hạ Tầng"],
  Be = [
    "Thần Châu",
    "Đông Thương",
    "Nam Viêm",
    "Tây Canh",
    "Bắc Minh",
    "Tứ Hải",
    "Thiên Uyên",
    "Quy Khương",
    "Hoàng Tuyền Cổ Tích",
    "Vô Tận Viêm Uyên",
    "Lôi Bạo Hải",
  ],
  ze = {
    "Thần Châu": ["Thần Châu", "Trung Châu", "Trung Nguyên"],
    "Đông Thương": ["Đông Thương", "Đông Hoang"],
    "Nam Viêm": ["Nam Viêm", "Nam Cương"],
    "Tây Canh": ["Tây Canh", "Tây Mạc"],
    "Bắc Minh": ["Bắc Minh", "Bắc Vực"],
    "Tứ Hải": ["Tứ Hải", "Ngoại Hải"],
    "Thiên Uyên": ["Thiên Uyên"],
    "Quy Khương": ["Quy Khương"],
    "Hoàng Tuyền Cổ Tích": ["Hoàng Tuyền Cổ Tích", "Hoàng Tuyền"],
    "Vô Tận Viêm Uyên": ["Vô Tận Viêm Uyên", "Viêm Uyên"],
    "Lôi Bạo Hải": ["Lôi Bạo Hải"],
  },
  $e = [..._e, ...Be],
  De = (e) => Be.includes(e),
  Ne = (e) => {
    const t = String(e || "").trim();
    if (!t) return "";
    const n = t
      .split(/[·•\-—_：:／/|]/)
      .map((e) => e.trim())
      .filter(Boolean);
    return n.length >= 2 && $e.includes(n[0]) ? n.slice(1).join("") : t;
  },
  ke = (e) => {
    const t = String(e || "");
    if (!t) return "";
    for (const e of Be) if (t.includes(e)) return e;
    for (const [e, n] of Object.entries(ze))
      if (n.some((e) => t.includes(e))) return e;
    return "";
  },
  Ve = (e, t, n, a) => {
    if (!n) return "";
    const r = String(e || "").trim(),
      s = Array.from(new Set([r, t, Ne(r), Ne(t)].filter(Boolean)));
    for (const e of s) {
      const t = n[e],
        r = t ? String(a(t) || "").trim() : "";
      if (De(r)) return r;
    }
    let o = "",
      i = "";
    for (const [e, t] of Object.entries(n)) {
      const n = String(a(t) || "").trim();
      if (!De(n)) continue;
      const r = Ne(e);
      if (!r) continue;
      s.some((e) => e.includes(r) || r.includes(e)) &&
        r.length > o.length &&
        ((o = r), (i = n));
    }
    return i;
  },
  Me = (e, t, n, a, r, s) => {
    const o = Ne(e),
      i = String(t || "").trim(),
      l = String(s || "").trim(),
      c = ke(String(e || ""));
    if (c) return c;
    const d = Ve(e, o, a, (e) => String(e?.vuc || ""));
    if (d) return d;
    const u = Ve(e, o, r, (e) => String(e?.layer || ""));
    if (u) return u;
    if (De(i)) return i;
    if (((m = i), _e.includes(m))) {
      const t = ke(`${String(e || "")} ${o} ${String(n || "")}`);
      if (t) return t;
      if (De(l)) return l;
    }
    var m;
    return De(l) ? l : i;
  };
var Re = Vue;
var Te = {
    bootStatus: "idle",
    processing: !1,
    pendingReason: "",
    queuedReason: "",
    lastReason: "",
    lastMode: "",
    lastUpdatedAt: 0,
    lastMessage: "",
    lastError: "",
    worldbookName: "",
    settings: {
      enabled: !0,
      auto_apply: !0,
      debug: !0,
      show_toasts: !0,
      context_window: 2,
      debounce_delay: 500,
      map_sticky_cycles: 3,
      character_sticky_cycles: 2,
      forced_enable_entries: [],
      forced_disable_entries: [],
    },
    context: null,
    summary: {
      enabledCount: 0,
      disabledCount: 0,
      totalProcessed: 0,
      activeEntries: [],
      changedEntries: [],
      decisionTraces: [],
      topScoredEntries: [],
    },
    diagnostics: null,
    preview: null,
  },
  Ue = {};
var je = new Set();
function Fe() {
  const e = a(Te);
  je.forEach((t) => t(e));
}
function Oe() {
  return a(Te);
}
function Ge(e) {
  return ((Te = { ...Te, ...a(e) }), Fe(), Oe());
}
async function Le(e = "enable") {
  return Ue.manualRefresh ? Ue.manualRefresh(e) : Oe();
}
var Ie = i.z
    .array(i.z.coerce.string())
    .transform((e) =>
      Array.from(new Set(e.map((e) => String(e).trim()).filter(Boolean))),
    )
    .prefault([]),
  Pe = i.z
    .object({
      enabled: i.z.boolean().prefault(!0),
      auto_apply: i.z.boolean().prefault(!0),
      debug: i.z.boolean().prefault(!0),
      show_toasts: i.z.boolean().prefault(!0),
      context_window: i.z.coerce
        .number()
        .transform((e) => _.clamp(Number(e) || 2, 1, 8))
        .prefault(2),
      debounce_delay: i.z.coerce
        .number()
        .transform((e) => _.clamp(Number(e) || 500, 100, 5e3))
        .prefault(500),
      map_sticky_cycles: i.z.coerce
        .number()
        .transform((e) => _.clamp(Number(e) || 3, 0, 8))
        .prefault(3),
      character_sticky_cycles: i.z.coerce
        .number()
        .transform((e) => _.clamp(Number(e) || 2, 0, 8))
        .prefault(2),
      forced_enable_entries: Ie,
      forced_disable_entries: Ie,
    })
    .prefault({}),
  He = { type: "script", script_id: getScriptId() },
  We = new Set();
function Ye() {
  return Pe.parse(getVariables(He));
}
var qe = t(
    "Đạp Nguyệt Tầm Tiên - Quản lý Thế Giới Thư Động - settings",
    () => {
      const e = (0, Re.ref)(Ye());
      (0, Re.watch)(
        e,
        (t) => {
          const n = Pe.parse(a(t));
          _.isEqual(n, t)
            ? (insertOrAssignVariables(a(n), He),
              (function (e = Ye()) {
                const t = a(e);
                We.forEach((e) => e(t));
              })(n))
            : (e.value = n);
        },
        { deep: !0, immediate: !0 },
      );
      return {
        settings: e,
        reloadSettings: () => {
          e.value = Ye();
        },
        resetSettings: () => {
          e.value = Pe.parse({});
        },
      };
    },
  ),
  Qe = { class: "dynamic-worldbook-settings" },
  Xe = { class: "inline-drawer" },
  Je = { class: "inline-drawer-content" },
  Ke = { class: "dw-grid" },
  Ze = { class: "dw-card dw-hero" },
  et = { class: "dw-status-row" },
  tt = { class: "dw-meta-list" },
  nt = { key: 0, class: "dw-tip" },
  at = { key: 1, class: "dw-error" },
  rt = { class: "dw-card" },
  st = { class: "dw-toggle" },
  ot = { class: "dw-toggle" },
  it = { class: "dw-toggle" },
  lt = { class: "dw-toggle" },
  ct = { class: "dw-field" },
  dt = { class: "dw-field" },
  ut = { class: "dw-field" },
  mt = { class: "dw-field" },
  pt = { class: "dw-actions" },
  ft = ["disabled"],
  gt = ["disabled"],
  vt = ["disabled"],
  wt = { class: "dw-actions" },
  bt = ["disabled"],
  Et = ["disabled"],
  ht = { class: "dw-card" },
  yt = { class: "dw-meta-list" },
  At = { key: 0, class: "dw-tip" },
  Ct = { key: 1, class: "dw-list" },
  xt = { key: 2, class: "dw-empty" },
  St = { class: "dw-card" },
  _t = { class: "dw-metrics" },
  Bt = { class: "dw-metric" },
  zt = { class: "dw-metric-value" },
  $t = { class: "dw-metric" },
  Dt = { class: "dw-metric-value" },
  Nt = { class: "dw-metric" },
  kt = { class: "dw-metric-value" },
  Vt = { key: 0, class: "dw-list" },
  Mt = { class: "dw-item-main" },
  Rt = { class: "dw-item-sub" },
  Tt = { key: 1, class: "dw-empty" },
  Ut = { class: "dw-card" },
  jt = { class: "dw-textarea" },
  Ft = { class: "dw-textarea" },
  Ot = { class: "dw-card" },
  Gt = { key: 0, class: "dw-list" },
  Lt = { class: "dw-item-head" },
  It = { class: "dw-item-main" },
  Pt = { class: "dw-item-sub" },
  Ht = { class: "dw-reasons" },
  Wt = { key: 1, class: "dw-empty" },
  Yt = { class: "dw-card" },
  qt = { key: 0, class: "dw-list" },
  Qt = { class: "dw-item-head" },
  Xt = { class: "dw-item-main" },
  Jt = { class: "dw-item-sub" },
  Kt = { class: "dw-reasons" },
  Zt = { key: 1, class: "dw-empty" },
  en = { class: "dw-card" },
  tn = { class: "dw-actions" },
  nn = ["disabled"],
  an = ["disabled"],
  rn = { key: 0, class: "dw-metrics dw-metrics-dense" },
  sn = { class: "dw-metric" },
  on = { class: "dw-metric-value" },
  ln = { class: "dw-metric" },
  cn = { class: "dw-metric-value" },
  dn = { class: "dw-metric" },
  un = { class: "dw-metric-value" },
  mn = { class: "dw-metric" },
  pn = { class: "dw-metric-value" },
  fn = { class: "dw-metric" },
  gn = { class: "dw-metric-value" },
  vn = { key: 1, class: "dw-list" },
  wn = { key: 0, class: "dw-list-item" },
  bn = { class: "dw-reasons" },
  En = { key: 1, class: "dw-list-item" },
  hn = { class: "dw-reasons" },
  yn = { key: 2, class: "dw-list-item" },
  An = { class: "dw-reasons" },
  Cn = { key: 3, class: "dw-list-item" },
  xn = { class: "dw-reasons" },
  Sn = { key: 2, class: "dw-empty" },
  _n = { class: "dw-card dw-card-span" },
  Bn = { class: "dw-grid dw-inner-grid" },
  zn = { class: "dw-field" },
  $n = { class: "dw-field" },
  Dn = { class: "dw-textarea" },
  Nn = { class: "dw-textarea" },
  kn = { class: "dw-actions" },
  Vn = ["disabled"],
  Mn = ["disabled"],
  Rn = { key: 0, class: "dw-tag-list" },
  Tn = { key: 1, class: "dw-empty" },
  Un = { key: 2, class: "dw-list" },
  jn = { class: "dw-item-head" },
  Fn = { class: "dw-item-main" },
  On = { class: "dw-item-sub" },
  Gn = { class: "dw-reasons" },
  Ln = { key: 3, class: "dw-empty" },
  In = { class: "dw-card dw-card-span" },
  Pn = { key: 0, class: "dw-tag-list" },
  Hn = { key: 1, class: "dw-empty" },
  Wn = (0, Re.defineComponent)({
    __name: "Giao diện thiết lập",
    setup(e) {
      const t = qe(),
        { settings: a } = n(t),
        r = (0, Re.ref)(Oe()),
        s = (0, Re.ref)(!1),
        o = (0, Re.ref)(""),
        i = (0, Re.ref)(""),
        l = (0, Re.ref)(""),
        c = (0, Re.ref)(""),
        d = (0, Re.computed)(
          () =>
            ({
              idle: "Chờ",
              initializing: "Đang khởi tạo",
              ready: "Sẵn sàng",
              waiting_mvu: "Chờ MVU",
            })[r.value.bootStatus] ?? r.value.bootStatus,
        ),
        u = (0, Re.computed)(() =>
          [...r.value.summary.decisionTraces]
            .filter((e) => "Bản đồ" === e.category)
            .sort((e, t) => t.score - e.score)
            .slice(0, 8),
        ),
        m = (0, Re.computed)(() =>
          r.value.lastUpdatedAt
            ? new Date(r.value.lastUpdatedAt).toLocaleString()
            : "Tạm vô",
        ),
        p = (e) =>
          Array.from(
            new Set(
              e
                .split(/\r?\n|,/)
                .map((e) => e.trim())
                .filter(Boolean),
            ),
          ),
        f = (0, Re.computed)({
          get: () => a.value.forced_enable_entries.join("\n"),
          set: (e) => {
            a.value.forced_enable_entries = p(e);
          },
        }),
        g = (0, Re.computed)({
          get: () => a.value.forced_disable_entries.join("\n"),
          set: (e) => {
            a.value.forced_disable_entries = p(e);
          },
        });
      let v = () => {};
      async function w(e) {
        if (!s.value) {
          s.value = !0;
          try {
            await e();
          } finally {
            s.value = !1;
          }
        }
      }
      async function b() {
        await w(async () => {
          r.value = await (async function () {
            return Ue.refreshSnapshot ? Ue.refreshSnapshot() : Oe();
          })();
        });
      }
      async function E() {
        await w(async () => {
          r.value = await Le("enable");
        });
      }
      async function h() {
        await w(async () => {
          r.value = await Le("disable");
        });
      }
      async function y() {
        await w(async () => {
          r.value = await (async function () {
            return Ue.runDiagnostics ? Ue.runDiagnostics() : Oe();
          })();
        });
      }
      function A() {
        ((o.value = r.value.context?.currentRegion || ""),
          (i.value = r.value.context?.currentLayer || ""),
          (l.value = r.value.context?.environmentDesc || ""),
          (c.value = r.value.context?.recentMessages?.join("\n") || ""));
      }
      async function C() {
        await w(async () => {
          const e = {
            currentRegion: o.value,
            currentLayer: i.value,
            environmentDesc: l.value,
            recentMessages:
              ((t = c.value),
              t
                .split(/\r?\n/)
                .map((e) => e.trim())
                .filter(Boolean)),
          };
          var t;
          r.value = await (async function (e) {
            return Ue.runPreview ? Ue.runPreview(e) : Oe();
          })(e);
        });
      }
      function x() {
        t.reloadSettings();
      }
      function S() {
        t.resetSettings();
      }
      return (
        (0, Re.onMounted)(() => {
          var e;
          ((e = (e) => {
            r.value = e;
          }),
            je.add(e),
            e(Oe()),
            (v = () => je.delete(e)),
            b().then(() => {
              o.value || c.value || A();
            }));
        }),
        (0, Re.onUnmounted)(() => {
          v();
        }),
        (e, t) => (
          (0, Re.openBlock)(),
          (0, Re.createElementBlock)("div", Qe, [
            (0, Re.createElementVNode)("div", Xe, [
              t[58] ||
                (t[58] = (0, Re.createElementVNode)(
                  "div",
                  { class: "inline-drawer-toggle inline-drawer-header" },
                  [
                    (0, Re.createElementVNode)(
                      "b",
                      null,
                      "Quản Lý World Book Động V2",
                    ),
                    (0, Re.createElementVNode)("div", {
                      class:
                        "inline-drawer-icon fa-solid fa-circle-chevron-down down",
                    }),
                  ],
                  -1,
                )),
              (0, Re.createElementVNode)("div", Je, [
                (0, Re.createElementVNode)("div", Ke, [
                  (0, Re.createElementVNode)("section", Ze, [
                    t[15] ||
                      (t[15] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Trạng thái hiện tại",
                        -1,
                      )),
                    (0, Re.createElementVNode)("div", et, [
                      (0, Re.createElementVNode)(
                        "span",
                        {
                          class: (0, Re.normalizeClass)([
                            "dw-pill",
                            `is-${(0, Re.unref)(r).bootStatus}`,
                          ]),
                        },
                        (0, Re.toDisplayString)((0, Re.unref)(d)),
                        3,
                      ),
                      (0, Re.createElementVNode)(
                        "span",
                        {
                          class: (0, Re.normalizeClass)([
                            "dw-pill",
                            (0, Re.unref)(r).processing ? "is-busy" : "is-idle",
                          ]),
                        },
                        (0, Re.toDisplayString)(
                          (0, Re.unref)(r).processing
                            ? "Đang xử lý"
                            : "Rảnh rỗi",
                        ),
                        3,
                      ),
                      (0, Re.createElementVNode)(
                        "span",
                        {
                          class: (0, Re.normalizeClass)([
                            "dw-pill",
                            (0, Re.unref)(a).enabled ? "is-on" : "is-off",
                          ]),
                        },
                        (0, Re.toDisplayString)(
                          (0, Re.unref)(a).enabled ? "Đã bật" : "Đã tắt",
                        ),
                        3,
                      ),
                      (0, Re.createElementVNode)(
                        "span",
                        {
                          class: (0, Re.normalizeClass)([
                            "dw-pill",
                            (0, Re.unref)(a).auto_apply ? "is-on" : "is-off",
                          ]),
                        },
                        (0, Re.toDisplayString)(
                          (0, Re.unref)(a).auto_apply
                            ? "Tự động áp dụng"
                            : "Chế độ thủ công",
                        ),
                        3,
                      ),
                    ]),
                    (0, Re.createElementVNode)("div", tt, [
                      t[14] ||
                        (t[14] = (0, Re.createElementVNode)(
                          "div",
                          null,
                          "Chiến lược: Mặc định tối ưu",
                          -1,
                        )),
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "World Book: " +
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).worldbookName ||
                              "Chưa liên kết / Chưa đọc",
                          ),
                        1,
                      ),
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "Nguyên nhân cuối: " +
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).lastReason || "Tạm vô",
                          ),
                        1,
                      ),
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "Thời gian cuối: " +
                          (0, Re.toDisplayString)((0, Re.unref)(m)),
                        1,
                      ),
                    ]),
                    (0, Re.unref)(r).lastMessage
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          nt,
                          (0, Re.toDisplayString)((0, Re.unref)(r).lastMessage),
                          1,
                        ))
                      : (0, Re.createCommentVNode)("v-if", !0),
                    (0, Re.unref)(r).lastError
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          at,
                          (0, Re.toDisplayString)((0, Re.unref)(r).lastError),
                          1,
                        ))
                      : (0, Re.createCommentVNode)("v-if", !0),
                  ]),
                  (0, Re.createElementVNode)("section", rt, [
                    t[24] ||
                      (t[24] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Bảng điều khiển",
                        -1,
                      )),
                    (0, Re.createElementVNode)("label", st, [
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[0] ||
                              (t[0] = (e) => ((0, Re.unref)(a).enabled = e)),
                            type: "checkbox",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelCheckbox, (0, Re.unref)(a).enabled]],
                      ),
                      t[16] ||
                        (t[16] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Kích hoạt quản lý World Book động",
                          -1,
                        )),
                    ]),
                    (0, Re.createElementVNode)("label", ot, [
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[1] ||
                              (t[1] = (e) => ((0, Re.unref)(a).auto_apply = e)),
                            type: "checkbox",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelCheckbox, (0, Re.unref)(a).auto_apply]],
                      ),
                      t[17] ||
                        (t[17] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Tự động áp dụng sau khi lắng nghe sự kiện",
                          -1,
                        )),
                    ]),
                    (0, Re.createElementVNode)("label", it, [
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[2] ||
                              (t[2] = (e) =>
                                ((0, Re.unref)(a).show_toasts = e)),
                            type: "checkbox",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelCheckbox, (0, Re.unref)(a).show_toasts]],
                      ),
                      t[18] ||
                        (t[18] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Hiển thị thông báo Toast",
                          -1,
                        )),
                    ]),
                    (0, Re.createElementVNode)("label", lt, [
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[3] ||
                              (t[3] = (e) => ((0, Re.unref)(a).debug = e)),
                            type: "checkbox",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelCheckbox, (0, Re.unref)(a).debug]],
                      ),
                      t[19] ||
                        (t[19] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Nhật ký Debug",
                          -1,
                        )),
                    ]),
                    (0, Re.createElementVNode)("label", ct, [
                      t[20] ||
                        (t[20] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Cửa sổ ngữ cảnh",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[4] ||
                              (t[4] = (e) =>
                                ((0, Re.unref)(a).context_window = e)),
                            class: "text_pole",
                            type: "number",
                            min: "1",
                            max: "8",
                          },
                          null,
                          512,
                        ),
                        [
                          [
                            Re.vModelText,
                            (0, Re.unref)(a).context_window,
                            void 0,
                            { number: !0 },
                          ],
                        ],
                      ),
                    ]),
                    (0, Re.createElementVNode)("label", dt, [
                      t[21] ||
                        (t[21] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Mili giây chống rung (Debounce)",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[5] ||
                              (t[5] = (e) =>
                                ((0, Re.unref)(a).debounce_delay = e)),
                            class: "text_pole",
                            type: "number",
                            min: "100",
                            max: "5000",
                            step: "100",
                          },
                          null,
                          512,
                        ),
                        [
                          [
                            Re.vModelText,
                            (0, Re.unref)(a).debounce_delay,
                            void 0,
                            { number: !0 },
                          ],
                        ],
                      ),
                    ]),
                    (0, Re.createElementVNode)("label", ut, [
                      t[22] ||
                        (t[22] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Số vòng duy trì bản đồ",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[6] ||
                              (t[6] = (e) =>
                                ((0, Re.unref)(a).map_sticky_cycles = e)),
                            class: "text_pole",
                            type: "number",
                            min: "0",
                            max: "8",
                          },
                          null,
                          512,
                        ),
                        [
                          [
                            Re.vModelText,
                            (0, Re.unref)(a).map_sticky_cycles,
                            void 0,
                            { number: !0 },
                          ],
                        ],
                      ),
                    ]),
                    (0, Re.createElementVNode)("label", mt, [
                      t[23] ||
                        (t[23] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Số vòng duy trì nhân vật",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              t[7] ||
                              (t[7] = (e) =>
                                ((0, Re.unref)(a).character_sticky_cycles = e)),
                            class: "text_pole",
                            type: "number",
                            min: "0",
                            max: "8",
                          },
                          null,
                          512,
                        ),
                        [
                          [
                            Re.vModelText,
                            (0, Re.unref)(a).character_sticky_cycles,
                            void 0,
                            { number: !0 },
                          ],
                        ],
                      ),
                    ]),
                    (0, Re.createElementVNode)("div", pt, [
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Bật đèn làm mới ngay",
                          disabled: (0, Re.unref)(s),
                          onClick: E,
                        },
                        null,
                        8,
                        ft,
                      ),
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Tắt đèn thu hồi",
                          disabled: (0, Re.unref)(s),
                          onClick: h,
                        },
                        null,
                        8,
                        gt,
                      ),
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Đồng bộ ngữ cảnh",
                          disabled: (0, Re.unref)(s),
                          onClick: b,
                        },
                        null,
                        8,
                        vt,
                      ),
                    ]),
                    (0, Re.createElementVNode)("div", wt, [
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Đọc lại cài đặt",
                          disabled: (0, Re.unref)(s),
                          onClick: x,
                        },
                        null,
                        8,
                        bt,
                      ),
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Đặt lại cài đặt",
                          disabled: (0, Re.unref)(s),
                          onClick: S,
                        },
                        null,
                        8,
                        Et,
                      ),
                    ]),
                  ]),
                  (0, Re.createElementVNode)("section", ht, [
                    t[25] ||
                      (t[25] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Ngữ cảnh",
                        -1,
                      )),
                    (0, Re.createElementVNode)("div", yt, [
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "Khu vực hiện tại: " +
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).context?.currentRegion ||
                              "Chưa biết",
                          ),
                        1,
                      ),
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "Tầng lớp thuộc: " +
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).context?.currentLayer ||
                              "Chưa biết",
                          ),
                        1,
                      ),
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "Vực tông môn hiện tại: " +
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).context?.domainName ||
                              "Chưa suy đoán",
                          ),
                        1,
                      ),
                      (0, Re.createElementVNode)(
                        "div",
                        null,
                        "Thế lực chính hiện tại: " +
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).context?.factionName ||
                              "Chưa suy đoán",
                          ),
                        1,
                      ),
                    ]),
                    (0, Re.unref)(r).context?.environmentDesc
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          At,
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).context.environmentDesc,
                          ),
                          1,
                        ))
                      : (0, Re.createCommentVNode)("v-if", !0),
                    t[26] ||
                      (t[26] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-subtitle" },
                        "Tin nhắn gần đây",
                        -1,
                      )),
                    (0, Re.unref)(r).context?.recentMessages?.length
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", Ct, [
                          ((0, Re.openBlock)(!0),
                          (0, Re.createElementBlock)(
                            Re.Fragment,
                            null,
                            (0, Re.renderList)(
                              (0, Re.unref)(r).context.recentMessages.slice(
                                0,
                                4,
                              ),
                              (e, t) => (
                                (0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "div",
                                  { key: `${t}-${e}`, class: "dw-list-item" },
                                  (0, Re.toDisplayString)(e),
                                  1,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          xt,
                          "Chưa có ngữ cảnh tin nhắn khả dụng",
                        )),
                  ]),
                  (0, Re.createElementVNode)("section", St, [
                    t[30] ||
                      (t[30] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Lần làm mới gần nhất",
                        -1,
                      )),
                    (0, Re.createElementVNode)("div", _t, [
                      (0, Re.createElementVNode)("div", Bt, [
                        (0, Re.createElementVNode)(
                          "div",
                          zt,
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).summary.enabledCount,
                          ),
                          1,
                        ),
                        t[27] ||
                          (t[27] = (0, Re.createElementVNode)(
                            "div",
                            { class: "dw-metric-label" },
                            "Mở",
                            -1,
                          )),
                      ]),
                      (0, Re.createElementVNode)("div", $t, [
                        (0, Re.createElementVNode)(
                          "div",
                          Dt,
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).summary.disabledCount,
                          ),
                          1,
                        ),
                        t[28] ||
                          (t[28] = (0, Re.createElementVNode)(
                            "div",
                            { class: "dw-metric-label" },
                            "Đóng",
                            -1,
                          )),
                      ]),
                      (0, Re.createElementVNode)("div", Nt, [
                        (0, Re.createElementVNode)(
                          "div",
                          kt,
                          (0, Re.toDisplayString)(
                            (0, Re.unref)(r).summary.totalProcessed,
                          ),
                          1,
                        ),
                        t[29] ||
                          (t[29] = (0, Re.createElementVNode)(
                            "div",
                            { class: "dw-metric-label" },
                            "Xử lý mục",
                            -1,
                          )),
                      ]),
                    ]),
                    t[31] ||
                      (t[31] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-subtitle" },
                        "Thay đổi mục",
                        -1,
                      )),
                    (0, Re.unref)(r).summary.changedEntries.length
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", Vt, [
                          ((0, Re.openBlock)(!0),
                          (0, Re.createElementBlock)(
                            Re.Fragment,
                            null,
                            (0, Re.renderList)(
                              (0, Re.unref)(r).summary.changedEntries.slice(
                                0,
                                10,
                              ),
                              (e) => (
                                (0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "div",
                                  {
                                    key: `${e.name}-${e.mode}-${e.to}`,
                                    class: "dw-list-item",
                                  },
                                  [
                                    (0, Re.createElementVNode)(
                                      "div",
                                      Mt,
                                      (0, Re.toDisplayString)(e.name),
                                      1,
                                    ),
                                    (0, Re.createElementVNode)(
                                      "div",
                                      Rt,
                                      (0, Re.toDisplayString)(e.from) +
                                        " → " +
                                        (0, Re.toDisplayString)(e.to) +
                                        " · " +
                                        (0, Re.toDisplayString)(e.mode),
                                      1,
                                    ),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          Tt,
                          "Lần gần nhất không có mục nào thay đổi",
                        )),
                  ]),
                  (0, Re.createElementVNode)("section", Ut, [
                    t[34] ||
                      (t[34] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Ghi đè thủ công",
                        -1,
                      )),
                    (0, Re.createElementVNode)("label", jt, [
                      t[32] ||
                        (t[32] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Cưỡng chế mở mục",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "textarea",
                          {
                            "onUpdate:modelValue":
                              t[8] ||
                              (t[8] = (e) =>
                                (0, Re.isRef)(f) ? (f.value = e) : null),
                            class: "text_pole",
                            rows: "5",
                            placeholder:
                              "[Bản đồ] Thần Mộc Khô Trủng\n[Nhân vật] Lăng Hàn Kính",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelText, (0, Re.unref)(f)]],
                      ),
                    ]),
                    (0, Re.createElementVNode)("label", Ft, [
                      t[33] ||
                        (t[33] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Cưỡng chế đóng mục",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "textarea",
                          {
                            "onUpdate:modelValue":
                              t[9] ||
                              (t[9] = (e) =>
                                (0, Re.isRef)(g) ? (g.value = e) : null),
                            class: "text_pole",
                            rows: "5",
                            placeholder:
                              "[Bản đồ] Đông Thương\n[Nhân vật] Một nhân vật",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelText, (0, Re.unref)(g)]],
                      ),
                    ]),
                    t[35] ||
                      (t[35] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-tip" },
                        "Mỗi dòng là một tên mục hoàn chỉnh, sau khi lưu sẽ lập tức tham gia phán đoán. Ghi đè cưỡng chế có độ ưu tiên cao hơn chấm điểm và quy tắc Boolean.",
                        -1,
                      )),
                  ]),
                  (0, Re.createElementVNode)("section", Ot, [
                    t[36] ||
                      (t[36] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Phán đoán bản đồ",
                        -1,
                      )),
                    (0, Re.unref)(u).length
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", Gt, [
                          ((0, Re.openBlock)(!0),
                          (0, Re.createElementBlock)(
                            Re.Fragment,
                            null,
                            (0, Re.renderList)(
                              (0, Re.unref)(u),
                              (e) => (
                                (0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "div",
                                  {
                                    key: `map-score-${e.name}-${e.score}`,
                                    class: "dw-list-item",
                                  },
                                  [
                                    (0, Re.createElementVNode)("div", Lt, [
                                      (0, Re.createElementVNode)(
                                        "div",
                                        It,
                                        (0, Re.toDisplayString)(e.name),
                                        1,
                                      ),
                                      (0, Re.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, Re.normalizeClass)([
                                            "dw-score-badge",
                                            e.matched ? "is-match" : "is-wait",
                                          ]),
                                        },
                                        (0, Re.toDisplayString)(e.score) +
                                          " / " +
                                          (0, Re.toDisplayString)(e.threshold),
                                        3,
                                      ),
                                    ]),
                                    (0, Re.createElementVNode)(
                                      "div",
                                      On,
                                      (0, Re.toDisplayString)(e.category) +
                                        " · " +
                                        (0, Re.toDisplayString)(
                                          "override" === e.source
                                            ? "Ghi đè thủ công"
                                            : "score" === e.source
                                              ? "Đánh giá điểm"
                                              : "Quy tắc Boolean",
                                        ),
                                      1,
                                    ),
                                    (0, Re.createElementVNode)("div", Ht, [
                                      ((0, Re.openBlock)(!0),
                                      (0, Re.createElementBlock)(
                                        Re.Fragment,
                                        null,
                                        (0, Re.renderList)(
                                          e.reasons,
                                          (t) => (
                                            (0, Re.openBlock)(),
                                            (0, Re.createElementBlock)(
                                              "div",
                                              {
                                                key: `map-reason-${e.name}-${t}`,
                                                class: "dw-reason",
                                              },
                                              (0, Re.toDisplayString)(t),
                                              1,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          Wt,
                          "Chưa thu thập được phán đoán bản đồ",
                        )),
                  ]),
                  (0, Re.createElementVNode)("section", Yt, [
                    t[37] ||
                      (t[37] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Giải thích điểm số",
                        -1,
                      )),
                    (0, Re.unref)(r).summary.topScoredEntries.length
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", qt, [
                          ((0, Re.openBlock)(!0),
                          (0, Re.createElementBlock)(
                            Re.Fragment,
                            null,
                            (0, Re.renderList)(
                              (0, Re.unref)(r).summary.topScoredEntries.slice(
                                0,
                                10,
                              ),
                              (e) => (
                                (0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "div",
                                  {
                                    key: `${e.name}-${e.score}-${e.category}`,
                                    class: "dw-list-item",
                                  },
                                  [
                                    (0, Re.createElementVNode)("div", Qt, [
                                      (0, Re.createElementVNode)(
                                        "div",
                                        Xt,
                                        (0, Re.toDisplayString)(e.name),
                                        1,
                                      ),
                                      (0, Re.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, Re.normalizeClass)([
                                            "dw-score-badge",
                                            e.matched ? "is-match" : "is-wait",
                                          ]),
                                        },
                                        (0, Re.toDisplayString)(e.score) +
                                          " / " +
                                          (0, Re.toDisplayString)(e.threshold),
                                        3,
                                      ),
                                    ]),
                                    (0, Re.createElementVNode)(
                                      "div",
                                      Jt,
                                      (0, Re.toDisplayString)(e.category) +
                                        " · " +
                                        (0, Re.toDisplayString)(
                                          "override" === e.source
                                            ? "Ghi đè thủ công"
                                            : "score" === e.source
                                              ? "Đánh giá điểm"
                                              : "Quy tắc Boolean",
                                        ),
                                      1,
                                    ),
                                    (0, Re.createElementVNode)("div", Kt, [
                                      ((0, Re.openBlock)(!0),
                                      (0, Re.createElementBlock)(
                                        Re.Fragment,
                                        null,
                                        (0, Re.renderList)(
                                          e.reasons,
                                          (t) => (
                                            (0, Re.openBlock)(),
                                            (0, Re.createElementBlock)(
                                              "div",
                                              {
                                                key: `${e.name}-${t}`,
                                                class: "dw-reason",
                                              },
                                              (0, Re.toDisplayString)(t),
                                              1,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          Zt,
                          "Chưa thu thập được giải thích điểm số",
                        )),
                  ]),
                  (0, Re.createElementVNode)("section", en, [
                    t[47] ||
                      (t[47] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Kiểm tra quy tắc",
                        -1,
                      )),
                    (0, Re.createElementVNode)("div", tn, [
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Chạy kiểm tra",
                          disabled: (0, Re.unref)(s),
                          onClick: y,
                        },
                        null,
                        8,
                        nn,
                      ),
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Điền ngữ cảnh vào Sandbox",
                          disabled: (0, Re.unref)(s),
                          onClick: A,
                        },
                        null,
                        8,
                        an,
                      ),
                    ]),
                    (0, Re.unref)(r).diagnostics
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", rn, [
                          (0, Re.createElementVNode)("div", sn, [
                            (0, Re.createElementVNode)(
                              "div",
                              on,
                              (0, Re.toDisplayString)(
                                (0, Re.unref)(r).diagnostics.totalEntries,
                              ),
                              1,
                            ),
                            t[38] ||
                              (t[38] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-metric-label" },
                                "Bật mục",
                                -1,
                              )),
                          ]),
                          (0, Re.createElementVNode)("div", ln, [
                            (0, Re.createElementVNode)(
                              "div",
                              cn,
                              (0, Re.toDisplayString)(
                                (0, Re.unref)(r).diagnostics.managedEntries,
                              ),
                              1,
                            ),
                            t[39] ||
                              (t[39] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-metric-label" },
                                "Đã quản lý",
                                -1,
                              )),
                          ]),
                          (0, Re.createElementVNode)("div", dn, [
                            (0, Re.createElementVNode)(
                              "div",
                              un,
                              (0, Re.toDisplayString)(
                                (0, Re.unref)(r).diagnostics.unmanagedEntries,
                              ),
                              1,
                            ),
                            t[40] ||
                              (t[40] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-metric-label" },
                                "Chưa quản lý",
                                -1,
                              )),
                          ]),
                          (0, Re.createElementVNode)("div", mn, [
                            (0, Re.createElementVNode)(
                              "div",
                              pn,
                              (0, Re.toDisplayString)(
                                (0, Re.unref)(r).diagnostics.unmappedMapEntries
                                  .length,
                              ),
                              1,
                            ),
                            t[41] ||
                              (t[41] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-metric-label" },
                                "Bản đồ chưa ánh xạ",
                                -1,
                              )),
                          ]),
                          (0, Re.createElementVNode)("div", fn, [
                            (0, Re.createElementVNode)(
                              "div",
                              gn,
                              (0, Re.toDisplayString)(
                                (0, Re.unref)(r).diagnostics
                                  .orphanOverrideEntries.length,
                              ),
                              1,
                            ),
                            t[42] ||
                              (t[42] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-metric-label" },
                                "Ghi đè mất hiệu lực",
                                -1,
                              )),
                          ]),
                        ]))
                      : (0, Re.createCommentVNode)("v-if", !0),
                    (0, Re.unref)(r).diagnostics
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", vn, [
                          (0, Re.unref)(r).diagnostics.unmanagedSamples.length
                            ? ((0, Re.openBlock)(),
                              (0, Re.createElementBlock)("div", wn, [
                                t[43] ||
                                  (t[43] = (0, Re.createElementVNode)(
                                    "div",
                                    { class: "dw-item-main" },
                                    "Mẫu mục chưa quản lý",
                                    -1,
                                  )),
                                (0, Re.createElementVNode)("div", bn, [
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).diagnostics
                                        .unmanagedSamples,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "div",
                                          {
                                            key: `unmanaged-${e}`,
                                            class: "dw-reason",
                                          },
                                          (0, Re.toDisplayString)(e),
                                          1,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]))
                            : (0, Re.createCommentVNode)("v-if", !0),
                          (0, Re.unref)(r).diagnostics.unmappedMapEntries.length
                            ? ((0, Re.openBlock)(),
                              (0, Re.createElementBlock)("div", En, [
                                t[44] ||
                                  (t[44] = (0, Re.createElementVNode)(
                                    "div",
                                    { class: "dw-item-main" },
                                    "Các mục bản đồ chưa được ánh xạ",
                                    -1,
                                  )),
                                (0, Re.createElementVNode)("div", hn, [
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).diagnostics
                                        .unmappedMapEntries,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "div",
                                          {
                                            key: `map-${e}`,
                                            class: "dw-reason",
                                          },
                                          (0, Re.toDisplayString)(e),
                                          1,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]))
                            : (0, Re.createCommentVNode)("v-if", !0),
                          (0, Re.unref)(r).diagnostics.unknownCharacterEntries
                            .length
                            ? ((0, Re.openBlock)(),
                              (0, Re.createElementBlock)("div", yn, [
                                t[45] ||
                                  (t[45] = (0, Re.createElementVNode)(
                                    "div",
                                    { class: "dw-item-main" },
                                    "Các mục nhân vật không tìm thấy trong dữ liệu hồng nhan hiện tại",
                                    -1,
                                  )),
                                (0, Re.createElementVNode)("div", An, [
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).diagnostics
                                        .unknownCharacterEntries,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "div",
                                          {
                                            key: `character-${e}`,
                                            class: "dw-reason",
                                          },
                                          (0, Re.toDisplayString)(e),
                                          1,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]))
                            : (0, Re.createCommentVNode)("v-if", !0),
                          (0, Re.unref)(r).diagnostics.overrideConflicts
                            .length ||
                          (0, Re.unref)(r).diagnostics.orphanOverrideEntries
                            .length
                            ? ((0, Re.openBlock)(),
                              (0, Re.createElementBlock)("div", Cn, [
                                t[46] ||
                                  (t[46] = (0, Re.createElementVNode)(
                                    "div",
                                    { class: "dw-item-main" },
                                    "Bất thường ghi đè thủ công",
                                    -1,
                                  )),
                                (0, Re.createElementVNode)("div", xn, [
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).diagnostics
                                        .overrideConflicts,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "div",
                                          {
                                            key: `conflict-${e}`,
                                            class: "dw-reason",
                                          },
                                          "Đồng thời ghi mở/đóng: " +
                                            (0, Re.toDisplayString)(e),
                                          1,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).diagnostics
                                        .orphanOverrideEntries,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "div",
                                          {
                                            key: `orphan-${e}`,
                                            class: "dw-reason",
                                          },
                                          "Không tìm thấy trong World Book: " +
                                            (0, Re.toDisplayString)(e),
                                          1,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]))
                            : (0, Re.createCommentVNode)("v-if", !0),
                        ]))
                      : ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          Sn,
                          "Chưa thực hiện kiểm tra quy tắc",
                        )),
                  ]),
                  (0, Re.createElementVNode)("section", _n, [
                    t[54] ||
                      (t[54] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Sandbox thử nghiệm",
                        -1,
                      )),
                    t[55] ||
                      (t[55] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-tip" },
                        "Trước tiên hãy điền ngữ cảnh hiện tại vào sandbox, sau đó thay đổi khu vực, tầng lớp hoặc tin nhắn để giả định, để xem trước những mục nào sẽ được mở.",
                        -1,
                      )),
                    (0, Re.createElementVNode)("div", Bn, [
                      (0, Re.createElementVNode)("label", zn, [
                        t[48] ||
                          (t[48] = (0, Re.createElementVNode)(
                            "span",
                            null,
                            "Khu vực thử nghiệm",
                            -1,
                          )),
                        (0, Re.withDirectives)(
                          (0, Re.createElementVNode)(
                            "input",
                            {
                              "onUpdate:modelValue":
                                t[10] ||
                                (t[10] = (e) =>
                                  (0, Re.isRef)(o) ? (o.value = e) : null),
                              class: "text_pole",
                              type: "text",
                              placeholder: "Ví dụ: Thần Mộc Khô Trủng",
                            },
                            null,
                            512,
                          ),
                          [[Re.vModelText, (0, Re.unref)(o)]],
                        ),
                      ]),
                      (0, Re.createElementVNode)("label", $n, [
                        t[49] ||
                          (t[49] = (0, Re.createElementVNode)(
                            "span",
                            null,
                            "Tầng lớp thuộc",
                            -1,
                          )),
                        (0, Re.withDirectives)(
                          (0, Re.createElementVNode)(
                            "input",
                            {
                              "onUpdate:modelValue":
                                t[11] ||
                                (t[11] = (e) =>
                                  (0, Re.isRef)(i) ? (i.value = e) : null),
                              class: "text_pole",
                              type: "text",
                              placeholder: "Ví dụ: Đông Thương",
                            },
                            null,
                            512,
                          ),
                          [[Re.vModelText, (0, Re.unref)(i)]],
                        ),
                      ]),
                    ]),
                    (0, Re.createElementVNode)("label", Dn, [
                      t[50] ||
                        (t[50] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Mô tả môi trường",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "textarea",
                          {
                            "onUpdate:modelValue":
                              t[12] ||
                              (t[12] = (e) =>
                                (0, Re.isRef)(l) ? (l.value = e) : null),
                            class: "text_pole",
                            rows: "3",
                            placeholder:
                              "Ví dụ: Sâu trong đằng hải, tro tàn tuế nguyệt tản mát, chướng khí tràn ngập.",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelText, (0, Re.unref)(l)]],
                      ),
                    ]),
                    (0, Re.createElementVNode)("label", Nn, [
                      t[51] ||
                        (t[51] = (0, Re.createElementVNode)(
                          "span",
                          null,
                          "Tin nhắn thử nghiệm",
                          -1,
                        )),
                      (0, Re.withDirectives)(
                        (0, Re.createElementVNode)(
                          "textarea",
                          {
                            "onUpdate:modelValue":
                              t[13] ||
                              (t[13] = (e) =>
                                (0, Re.isRef)(c) ? (c.value = e) : null),
                            class: "text_pole",
                            rows: "6",
                            placeholder:
                              "Mỗi dòng một tin nhắn, dùng để giả lập ngữ cảnh gần đây.",
                          },
                          null,
                          512,
                        ),
                        [[Re.vModelText, (0, Re.unref)(c)]],
                      ),
                    ]),
                    (0, Re.createElementVNode)("div", kn, [
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Diễn tập kết quả trúng",
                          disabled: (0, Re.unref)(s),
                          onClick: C,
                        },
                        null,
                        8,
                        Vn,
                      ),
                      (0, Re.createElementVNode)(
                        "input",
                        {
                          class: "menu_button",
                          type: "button",
                          value: "Điền bằng ngữ cảnh hiện tại",
                          disabled: (0, Re.unref)(s),
                          onClick: A,
                        },
                        null,
                        8,
                        Mn,
                      ),
                    ]),
                    (0, Re.unref)(r).preview
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          Re.Fragment,
                          { key: 0 },
                          [
                            t[52] ||
                              (t[52] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-subtitle" },
                                "Diễn tập mục trúng",
                                -1,
                              )),
                            (0, Re.unref)(r).preview.matchedEntries.length
                              ? ((0, Re.openBlock)(),
                                (0, Re.createElementBlock)("div", Rn, [
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).preview.matchedEntries,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "span",
                                          {
                                            key: `preview-${e}`,
                                            class: "dw-tag",
                                          },
                                          (0, Re.toDisplayString)(e),
                                          1,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]))
                              : ((0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "div",
                                  Tn,
                                  "Nhóm ngữ cảnh này tạm thời không trúng mục sáng thường trực nào",
                                )),
                            t[53] ||
                              (t[53] = (0, Re.createElementVNode)(
                                "div",
                                { class: "dw-subtitle" },
                                "Diễn tập chi tiết điểm số",
                                -1,
                              )),
                            (0, Re.unref)(r).preview.topScoredEntries.length
                              ? ((0, Re.openBlock)(),
                                (0, Re.createElementBlock)("div", Un, [
                                  ((0, Re.openBlock)(!0),
                                  (0, Re.createElementBlock)(
                                    Re.Fragment,
                                    null,
                                    (0, Re.renderList)(
                                      (0, Re.unref)(r).preview.topScoredEntries,
                                      (e) => (
                                        (0, Re.openBlock)(),
                                        (0, Re.createElementBlock)(
                                          "div",
                                          {
                                            key: `preview-score-${e.name}-${e.score}`,
                                            class: "dw-list-item",
                                          },
                                          [
                                            (0, Re.createElementVNode)(
                                              "div",
                                              jn,
                                              [
                                                (0, Re.createElementVNode)(
                                                  "div",
                                                  Fn,
                                                  (0, Re.toDisplayString)(
                                                    e.name,
                                                  ),
                                                  1,
                                                ),
                                                (0, Re.createElementVNode)(
                                                  "div",
                                                  {
                                                    class: (0,
                                                    Re.normalizeClass)([
                                                      "dw-score-badge",
                                                      e.matched
                                                        ? "is-match"
                                                        : "is-wait",
                                                    ]),
                                                  },
                                                  (0, Re.toDisplayString)(
                                                    e.score,
                                                  ) +
                                                    " / " +
                                                    (0, Re.toDisplayString)(
                                                      e.threshold,
                                                    ),
                                                  3,
                                                ),
                                              ],
                                            ),
                                            (0, Re.createElementVNode)(
                                              "div",
                                              On,
                                              (0, Re.toDisplayString)(
                                                e.category,
                                              ) +
                                                " · " +
                                                (0, Re.toDisplayString)(
                                                  "override" === e.source
                                                    ? "Ghi đè thủ công"
                                                    : "score" === e.source
                                                      ? "Đánh giá điểm"
                                                      : "Quy tắc Boolean",
                                                ),
                                              1,
                                            ),
                                            (0, Re.createElementVNode)(
                                              "div",
                                              Gn,
                                              [
                                                ((0, Re.openBlock)(!0),
                                                (0, Re.createElementBlock)(
                                                  Re.Fragment,
                                                  null,
                                                  (0, Re.renderList)(
                                                    e.reasons,
                                                    (t) => (
                                                      (0, Re.openBlock)(),
                                                      (0,
                                                      Re.createElementBlock)(
                                                        "div",
                                                        {
                                                          key: `preview-reason-${e.name}-${t}`,
                                                          class: "dw-reason",
                                                        },
                                                        (0, Re.toDisplayString)(
                                                          t,
                                                        ),
                                                        1,
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                              ],
                                            ),
                                          ],
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]))
                              : ((0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "div",
                                  Ln,
                                  "Chưa có dữ liệu điểm số diễn tập",
                                )),
                          ],
                          64,
                        ))
                      : (0, Re.createCommentVNode)("v-if", !0),
                  ]),
                  (0, Re.createElementVNode)("section", In, [
                    t[56] ||
                      (t[56] = (0, Re.createElementVNode)(
                        "div",
                        { class: "dw-card-title" },
                        "Các mục sáng thường trực hiện tại",
                        -1,
                      )),
                    (0, Re.unref)(r).summary.activeEntries.length
                      ? ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)("div", Pn, [
                          ((0, Re.openBlock)(!0),
                          (0, Re.createElementBlock)(
                            Re.Fragment,
                            null,
                            (0, Re.renderList)(
                              (0, Re.unref)(r).summary.activeEntries.slice(
                                0,
                                24,
                              ),
                              (e) => (
                                (0, Re.openBlock)(),
                                (0, Re.createElementBlock)(
                                  "span",
                                  { key: e, class: "dw-tag" },
                                  (0, Re.toDisplayString)(e),
                                  1,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ((0, Re.openBlock)(),
                        (0, Re.createElementBlock)(
                          "div",
                          Hn,
                          "Chưa có ảnh chụp nhanh các mục sáng thường trực",
                        )),
                  ]),
                ]),
                t[57] ||
                  (t[57] = (0, Re.createElementVNode)(
                    "hr",
                    { class: "sysHR" },
                    null,
                    -1,
                  )),
              ]),
            ]),
          ])
        )
      );
    },
  });
o(400);
var Yn = (0, o(502).A)(Wn, [["__scopeId", "data-v-74093af2"]]),
  qn = e(),
  Qn = (0, Re.createApp)(Yn).use(qn);
var Xn = !1;
function Jn() {
  if (Xn) return;
  const e = $("<div>").attr("script_id", getScriptId());
  ($("#extensions_settings2").append(e),
    (function () {
      if ($(`head > div[script_id="${getScriptId()}"]`).length > 0) return;
      const e = $("<div>")
        .attr("script_id", getScriptId())
        .append($("head > style", document).clone());
      $("head").append(e);
    })(),
    Qn.mount(e[0]),
    (Xn = !0));
}
function Kn() {
  Xn &&
    (Qn.unmount(),
    $(`head > div[script_id="${getScriptId()}"]`).remove(),
    $(`div[script_id="${getScriptId()}"]`).remove(),
    (Xn = !1));
}
var Zn = {
  WORLDBOOK_NAME: "current",
  DEBUG: !0,
  CONTEXT_WINDOW: 2,
  STRATEGY: "balanced",
  MVU_INIT_TIMEOUT: 3e3,
  DEBOUNCE_DELAY: 500,
  CHARACTER_ALIASES: { "Ngu Tịch Nhan": ["Ngu Tịch", "Ngu Nhan"] },
  KEEP_ENABLED_AFTER_REPLY: [
    /^\[Hệ\s*[tT]hống\]/i,
    /^\[mvu_update\]/i,
    /^(?:\[mvu\]\s*Danh\s*sách\s*biến|Danh\s*Sách\s*Biến)$/i,
    /^(?:\[Chỉ\s*mục\s*hồng\s*nhan\]|\[红颜索引\])$/i,
    /^\[Bản\s*[đĐ]ồ\]/i,
    /^\[Cảnh\s*giới\]/i,
  ],
};
var ea = Ye();
function ta() {
  return { ...ea };
}
function na(e) {
  ((ea = e),
    (Zn.DEBUG = e.debug),
    (Zn.CONTEXT_WINDOW = e.context_window),
    (Zn.DEBOUNCE_DELAY = e.debounce_delay),
    Ge({ settings: ta() }));
}
function aa() {
  return ea.show_toasts;
}
var ra;
(na(ea), (ra = na), We.add(ra), ra(Ye()));
var sa = {
    "Thần Châu": ["Thần Châu"],
    "Đông Thương": ["Đông Thương"],
    "Tây Canh": ["Tây Canh"],
    "Nam Viêm": ["Nam Viêm"],
    "Bắc Minh": ["Bắc Minh"],
    "Tứ Hải": ["Tứ Hải"],
    "Triều Âm Hải": ["Tứ Hải"],
    "Long Miên Hải": ["Tứ Hải"],
    "Bồng Lai Huyễn Hải": ["Tứ Hải"],
    "Quy Khương Chi Hải": ["Tứ Hải", "Quy Khương"],
    "Thiên Uyên": ["Thiên Uyên"],
    "Cửu Thiên Cương Phong Đới": ["Thiên Uyên"],
    "Quy Khương": ["Quy Khương"],
    "Hoàng Tuyền Cổ Tích": ["Hoàng Tuyền Cổ Tích"],
    "Vô Tận Viêm Uyên": ["Vô Tận Viêm Uyên"],
    "Lôi Bạo Hải": ["Lôi Bạo Hải"],
    "Thần Mộc Khô Trủng": ["Thần Mộc Khô Trủng"],
    "Vạn Cổ Khô Vinh Uyên": ["Thần Mộc Khô Trủng"],
    "Khô Vinh Uyên": ["Thần Mộc Khô Trủng"],
    "Táng Tiên Đằng Hải": ["Thần Mộc Khô Trủng"],
    "Khô Cốt Lâm": ["Thần Mộc Khô Trủng"],
    "Kì Biến Đằng Hải": ["Thần Mộc Khô Trủng"],
    "Tro Tàn Tuế Nguyệt": ["Thần Mộc Khô Trủng"],
    "Khô Vinh Bản Nguyên": ["Thần Mộc Khô Trủng"],
    "Vấn Đạo Phong": ["Thần Châu"],
    "Tàng Thư Các": ["Thần Châu"],
    "Phong Đô Thành": ["Thần Châu"],
    "Cửu Khúc Thiên Hà": ["Thần Châu"],
    "Long Môn Thác Nước": ["Thần Châu"],
    "Kiếm Môn Quan": ["Thần Châu"],
    "Kiến Mộc Sâm Lâm": ["Đông Thương"],
    "Lăng Thanh Đế": ["Đông Thương"],
    "Bách Hoa Bí Cảnh": ["Đông Thương"],
    "Vạn Kiếm Trủng": ["Tây Canh"],
    "Canh Kim Khoáng Mạch": ["Tây Canh"],
    "Bạch Hổ Hẻm Núi": ["Tây Canh"],
    "Bất Diệt Hỏa Sơn": ["Nam Viêm"],
    "Địa Hỏa Quật": ["Nam Viêm"],
    "Niết Bàn Đài": ["Nam Viêm"],
    "Huyền Băng Sơn": ["Bắc Minh"],
    "Quy Khương Hải Nhãn": ["Bắc Minh", "Quy Khương"],
    "Minh Hải": ["Bắc Minh"],
    "Hoàng Tuyền": ["Hoàng Tuyền Cổ Tích"],
    "Viêm Uyên": ["Vô Tận Viêm Uyên"],
    "Minh Hà": ["Hoàng Tuyền Cổ Tích"],
    "Bỉ Ngạn Hoa Hải": ["Hoàng Tuyền Cổ Tích"],
    "Bãi Bồi Minh Hà": ["Hoàng Tuyền Cổ Tích"],
    "Cửu Thiên": ["Thiên Uyên"],
    "Cương Phong": ["Thiên Uyên"],
    "Long Môn Thác": ["Thần Châu"],
    "Kiến Mộc Lâm": ["Đông Thương"],
    "Kiến Mộc": ["Đông Thương"],
    "Bách Hoa Cảnh": ["Đông Thương"],
    "Canh Kim": ["Tây Canh"],
    "Huyền Băng": ["Bắc Minh"],
    "Quy Khương Nhãn": ["Bắc Minh", "Quy Khương"],
  },
  oa = {
    "Thiên Tầng": "Thiên Uyên",
    "Địa Tầng": "Thần Châu",
    "Hạ Tầng": "Quy Khương",
  },
  ia = {
    "Thiên Tầng": ["Thiên Uyên"],
    "Thần Châu": ["Thần Châu"],
    "Đông Thương": ["Đông Thương"],
    "Nam Viêm": ["Nam Viêm"],
    "Tây Canh": ["Tây Canh"],
    "Bắc Minh": ["Bắc Minh"],
    "Tứ Hải": ["Tứ Hải"],
  };
var la = null,
  ca = {},
  da = {};
var ua = [
  "Lục Địa",
  "Tinh Vực",
  "Khu Vực",
  "Lãnh Địa",
  "Cảnh Nội",
  "Ngoại Vi",
  "Thâm Xứ",
  "Nhập Khẩu",
  "Biên Duyên",
  "Phúc Địa",
  "Trung Tâm",
  "Cốt Lõi",
  "Nội Bộ",
  "Phụ Cận",
  "Chu Biên",
  "Nhất Đới",
  "Địa Khu",
  "Chi Địa",
  "Sở Tại",
  "Phương Hướng",
  "Địa Đới",
  "Phạm Vi",
  "Dĩ Nội",
  "Dĩ Ngoại",
  "Thượng Phương",
  "Hạ Phương",
  "Chi Trung",
  "Chi Nội",
  "Chi Ngoại",
  "Địa Vực",
  "Giới Vực",
  "Không Gian",
  "Thế Giới",
  "Địa Giới",
];
function ma(e) {
  if (!e) return "";
  let t = e.trim();
  ((t = t.replace(/[（(][^）)]*[）)]/g, "")),
    (t = t.replace(/[「『【《][^」』】》]*[」』】受]/g, "")),
    (t = t.replace(/[""''「」]/g, "")));
  const n = [...ua].sort((e, t) => t.length - e.length);
  for (const e of n)
    if (t.endsWith(e) && t.length > e.length) {
      t = t.slice(0, -e.length);
      break;
    }
  return t.trim();
}
function pa(e, t) {
  if (!e) return [];
  const n = new Set(),
    a = ma(e);
  for (const r of new Set([e, a]))
    r &&
      sa[r] &&
      (sa[r].forEach((e) => n.add(e)),
      Zn.DEBUG &&
        t &&
        console.log(
          `[Dynamic Worldbook] ${t} matching: "${r}" → [${sa[r].join(",")}]`,
        ));
  const r = new Set();
  for (const t of new Set([e, a]))
    t &&
      t.split(/[·、/\\—\-～~]/).forEach((e) => {
        const t = e.trim();
        if (t) {
          r.add(t);
          const e = ma(t);
          e && e !== t && r.add(e);
        }
      });
  for (const e of r)
    if (sa[e]) {
      const a = n.size;
      (sa[e].forEach((e) => n.add(e)),
        Zn.DEBUG &&
          t &&
          n.size > a &&
          console.log(
            `[Dynamic Worldbook] ${t} segment matching: "${e}" → [${sa[e].join(",")}]`,
          ));
    }
  if (n.size > 0) return [...n];
  for (const [e, r] of Object.entries(sa))
    e.length < 2 ||
      ((a.includes(e) || e.includes(a)) &&
        (r.forEach((e) => n.add(e)),
        Zn.DEBUG &&
          t &&
          console.log(
            `[Dynamic Worldbook] ${t} contains matching: "${a}" ↔ "${e}" → [${r.join(",")}]`,
          )));
  if (n.size > 0) return [...n];
  for (const e of r)
    if (!(e.length < 2))
      for (const [a, r] of Object.entries(sa))
        a.length < 2 ||
          ((e.includes(a) || a.includes(e)) &&
            (r.forEach((e) => n.add(e)),
            Zn.DEBUG &&
              t &&
              console.log(
                `[Dynamic Worldbook] ${t} segment contains matching: "${e}" ↔ "${a}" → [${r.join(",")}]`,
              )));
  return [...n];
}
var fa = {
    "Huyền Vũ": ["Bắc Minh"],
    "Giao Nhân": ["Bắc Minh"],
    "Minh Thuyền": ["Bắc Minh"],
    "Chu Tước": ["Nam Viêm"],
    "Ly Hỏa Cung": ["Nam Viêm"],
    "Viêm Ma": ["Nam Viêm"],
    "Chú Kiếm Sơn Trang": ["Nam Viêm"],
    "Thanh Long": ["Đông Thương"],
    "Kiến Mộc": ["Đông Thương"],
    "Huyền Không Thành": ["Đông Thương"],
    "Thần Mộc Khô Trủng": ["Thần Mộc Khô Trủng"],
    "Vạn Cổ Khô Vinh Uyên": ["Thần Mộc Khô Trủng"],
    "Khô Vinh Uyên": ["Thần Mộc Khô Trủng"],
    "Táng Tiên Đằng Hải": ["Thần Mộc Khô Trủng"],
    "Thụ Ma": ["Thần Mộc Khô Trủng"],
    "Tước Đoạt Tuế Nguyệt": ["Thần Mộc Khô Trủng"],
    "Biến Dị Huyết Nhục": ["Thần Mộc Khô Trủng"],
    "Tro Tàn Tuế Nguyệt": ["Thần Mộc Khô Trủng"],
    "Khô Vinh Bản Nguyên": ["Thần Mộc Khô Trủng"],
    "Bạch Hổ": ["Tây Canh"],
    "Binh Gia": ["Tây Canh"],
    "Mộ Dung Thế Gia": ["Tây Canh"],
    "Quy Khương": ["Quy Khương"],
    "Hoàng Tuyền": ["Hoàng Tuyền Cổ Tích"],
    "Viêm Uyên": ["Vô Tận Viêm Uyên"],
    "Chúc Dung": ["Vô Tận Viêm Uyên"],
    "Lôi Bạo": ["Lôi Bạo Hải"],
    "Thiên Uyên": ["Thiên Uyên"],
    "Mảnh Tinh Thần": ["Thiên Uyên"],
    "Chiến Trường Long Phượng": ["Thiên Uyên"],
  },
  ga = { "Vạn Cổ Khô Vinh Uyên": "Thần Mộc Khô Trủng" },
  va = [
    {
      name: "Thần Châu",
      aliases: [
        "Thần Châu",
        "Trung Châu",
        "Hoàng Thành",
        "Vấn Đạo Phong",
        "Kiếm Môn Quan",
        "Long Môn Thác Nước",
      ],
    },
    {
      name: "Đông Thương",
      aliases: [
        "Đông Thương",
        "Kiến Mộc",
        "Lăng Thanh Đế",
        "Bách Hoa Bí Cảnh",
        "Long Miên Hải",
      ],
    },
    {
      name: "Nam Viêm",
      aliases: [
        "Nam Viêm",
        "Bất Diệt Hỏa Sơn",
        "Địa Hỏa Quật",
        "Niết Bàn Đài",
        "Ly Hỏa Cung",
      ],
    },
    {
      name: "Tây Canh",
      aliases: [
        "Tây Canh",
        "Vạn Kiếm Trủng",
        "Canh Kim Khoáng Mạch",
        "Bạch Hổ Thiên Tiệm",
        "Triều Âm Hải",
      ],
    },
    {
      name: "Bắc Minh",
      aliases: [
        "Bắc Minh",
        "Huyền Băng Sơn",
        "Minh Hải",
        "Giao Nhân",
        "Huyền Vũ",
        "Quy Khương Chi Hải",
      ],
    },
    {
      name: "Hoàng Tuyền Cổ Tích",
      aliases: [
        "Hoàng Tuyền Cổ Tích",
        "Hoàng Tuyền",
        "Minh Hà",
        "Vong Xuyên",
        "Cầu Nại Hà",
        "Đường Hoàng Tuyền",
        "Vọng Hương Đài",
        "Giếng Luân Hồi",
        "Bãi Bồi Minh Hà",
      ],
    },
    {
      name: "Quy Khương",
      aliases: [
        "Quy Khương",
        "Quy Khương Hải Nhãn",
        "Hải Nhãn",
        "Uyên Hạch",
        "Bắc Minh Hải Nhãn",
        "Đáy Quy Khương",
      ],
    },
    {
      name: "Vô Tận Viêm Uyên",
      aliases: [
        "Vô Tận Viêm Uyên",
        "Viêm Uyên",
        "Địa Tâm Hỏa Ngục",
        "Chúc Dung",
        "Lớp Hắc Diễm",
      ],
    },
  ],
  wa = [
    {
      name: "Đại Hạ Tiên Triều",
      domain: "Thần Châu",
      aliases: ["Đại Hạ", "Tiên Triều", "Hoàng Thành", "Triều Đình"],
    },
    {
      name: "Vong Cơ Kiếm Lư",
      domain: "Thần Châu",
      aliases: ["Kiếm Lư", "Vấn Kiếm", "Kiếm Môn", "Cổ Kiếm"],
    },
    {
      name: "Thái Hư Thận Lầu",
      domain: "Thần Châu",
      aliases: ["Thận Lầu", "Thiên Cơ", "Suy Diễn", "Mệnh Bàn"],
    },
    {
      name: "Vạn Tượng Sâm La Phường",
      domain: "Thần Châu",
      aliases: ["Sâm La Phường", "Phường Thị", "Chợ Đen", "Giao Dịch"],
    },
    {
      name: "Thương Mộc Long Ngâm Các",
      domain: "Đông Thương",
      aliases: ["Long Ngâm Các", "Kiến Mộc", "Lăng Thanh Đế"],
    },
    {
      name: "Linh Khu Bách Thảo Cốc",
      domain: "Đông Thương",
      aliases: ["Bách Thảo Cốc", "Dược Cốc", "Linh Bạt", "Đan Phòng"],
    },
    {
      name: "Phù Vân Triêu Lộ Các",
      domain: "Đông Thương",
      aliases: ["Triêu Lộ Các", "Phù Đảo", "Ca Yến", "Nhã Tập"],
    },
    {
      name: "Kiếp Hôi Thần Từ",
      domain: "Vô Tận Viêm Uyên",
      aliases: ["Thần Từ", "Kiếp Hôi", "Tế Hỏa", "Thiêu Thân"],
    },
    {
      name: "Uyên Hỏa Linh Tộc",
      domain: "Vô Tận Viêm Uyên",
      aliases: ["Hỏa Linh", "Dung Nham", "Viêm Linh", "Dòng Dung Nham"],
    },
    {
      name: "Đại Dã Thiên Công Lò",
      domain: "Nam Viêm",
      aliases: ["Thiên Công Lò", "Lò Luyện", "Khí Phường", "Đúc Khí"],
    },
    {
      name: "Thái Bạch Sát Sinh Trủng",
      domain: "Tây Canh",
      aliases: ["Sát Sinh Trủng", "Vạn Kiếm Trủng", "Bạch Hổ", "Sát Phạt"],
    },
    {
      name: "Chiết Kích Trầm Sa Cốc",
      domain: "Tây Canh",
      aliases: ["Trầm Sa Cốc", "Chiến Trận", "Quân Trận", "Binh Qua"],
    },
    {
      name: "Tàng Phong Liễm Ngạc Sơn Trang",
      domain: "Tây Canh",
      aliases: ["Sơn Trang", "Khoáng Mạch", "Canh Kim", "Đúc Phong"],
    },
    {
      name: "Tọa Vong Minh Hải Các",
      domain: "Bắc Minh",
      aliases: ["Minh Hải Các", "Tĩnh Hải", "Băng Hải"],
    },
    {
      name: "Khấp Châu Huyễn Hải Đình",
      domain: "Bắc Minh",
      aliases: ["Huyễn Hải Đình", "Giao Nhân", "Khấp Châu", "Mộng Cũ"],
    },
    {
      name: "Độ Ách U Phiền",
      domain: "Bắc Minh",
      aliases: ["U Phiền", "Bến Tàu", "Đưa Đò"],
    },
    {
      name: "Bỉ Ngạn Đề Đăng Nhân",
      domain: "Hoàng Tuyền Cổ Tích",
      aliases: [
        "Đề Đăng Nhân",
        "Bỉ Ngạn",
        "Dẫn Hồn",
        "Hoàng Tuyền Lộ",
        "引魂",
        "黄泉路",
      ],
    },
    {
      name: "Vô Gian Luân Hồi Đạo",
      domain: "Hoàng Tuyền Cổ Tích",
      aliases: [
        "Vô Gian",
        "Luân Hồi",
        "Nghiệp Hỏa",
        "Cứu Chuộc",
        "Giải Thoát",
        "业火",
        "救赎",
      ],
    },
    {
      name: "Vong Xuyên Phong Nguyệt Lầu",
      domain: "Hoàng Tuyền Cổ Tích",
      aliases: [
        "Phong Nguyệt Lầu",
        "Vong Xuyên",
        "Tiêu Kim Khố",
        "Canh Mạnh Bà",
        "忘川",
        "销金窟",
        "孟婆汤",
      ],
    },
    {
      name: "Kính Hoa Thủy Nguyệt Am",
      domain: "Hoàng Tuyền Cổ Tích",
      aliases: [
        "Kính Hoa",
        "Thủy Nguyệt Am",
        "Thải Bổ",
        "Đỉnh Lô",
        "采补",
        "鼎炉",
      ],
    },
    {
      name: "Thi Cốt Phù Đồ Tháp",
      domain: "Quy Khương",
      aliases: [
        "Phù Đồ Tháp",
        "Thi Cốt",
        "Luyện Thi",
        "Hoán Cốt",
        "尸骨",
        "炼尸",
        "换骨",
      ],
    },
    {
      name: "Thực Nguyệt Huyết Hải Tông",
      domain: "Quy Khương",
      aliases: [
        "Huyết Hải Tông",
        "Thực Nguyệt",
        "Hóa Huyết",
        "Thôn Phệ",
        "蚀月",
        "化血",
        "吞噬",
      ],
    },
  ],
  ba = {
    "Thần Châu": "Vong Cơ Kiếm Lư",
    "Đông Thương": "Thương Mộc Long Ngâm Các",
    "Nam Viêm": "Đại Dã Thiên Công Lò",
    "Vô Tận Viêm Uyên": "Kiếp Hôi Thần Từ",
    "Tây Canh": "Thái Bạch Sát Sinh Trủng",
    "Bắc Minh": "Độ Ách U Phiền",
    "Hoàng Tuyền Cổ Tích": "Bỉ Ngạn Đề Đăng Nhân",
    "Quy Khương": "Thi Cốt Phù Đồ Tháp",
  };
function Ea(e) {
  return (
    (e && va.find((t) => [t.name, ...t.aliases].some((t) => e.includes(t)))) ||
    null
  );
}
function ha(e) {
  return (
    (e && wa.find((t) => [t.name, ...t.aliases].some((t) => e.includes(t)))) ||
    null
  );
}
function ya(e) {
  const t = Me(
      e.currentRegion,
      e.currentLayer,
      e.environmentDesc,
      e.mvuData?.kho_dia_diem,
      e.mvuData?.ban_do_the_gioi,
    ),
    n = String(e.mvuData?.ban_ton?.than_phan?.tong_mon || "").trim(),
    a = String(e.mvuData?.ban_ton?.than_phan?.xuat_than || "").trim(),
    r = String(e.mvuData?.ban_ton?.hanh_tung?.thong_tin_dan_duong || "").trim(),
    s = String(e.mvuData?.hoan_canh_hien_tai || "").trim(),
    o = e.mvuData?.kho_dia_diem,
    i = e.mvuData?.ban_do_the_gioi,
    l = String(e.currentRegion || "")
      .split(/[·•\-—_：:／/|]/)
      .map((e) => e.trim())
      .filter(Boolean),
    c = ma(e.currentRegion),
    d = Array.from(new Set([e.currentRegion, c, ...l].filter(Boolean))),
    u = [],
    m = new Set(),
    p = (e) => {
      if (!e || m.has(e)) return;
      m.add(e);
      const t = o?.[e];
      t &&
        (u.push(
          t.vuc || "",
          t.loai || "",
          t.dac || "",
          ...(t.tai_nguyen || []),
        ),
        t.vuc && t.vuc !== e && p(t.vuc));
      const n = i?.[e];
      n && u.push(n.layer || "", n.desc || "", ...(n.connections || []));
    };
  return (
    d.forEach(p),
    [
      n,
      a,
      s,
      r,
      e.currentRegion,
      c,
      e.currentLayer,
      e.environmentDesc,
      t,
      ...l,
      ...u,
      ...e.recentMessages,
    ].filter(Boolean)
  );
}
function Aa(e) {
  const t = ya(e);
  for (const e of t) {
    const t = Ea(e);
    if (t) return t;
  }
  const n = t.map(ha).find(Boolean) || null;
  return (n && va.find((e) => e.name === n.domain)) || null;
}
function Ca(e) {
  const t = Aa(e),
    n = (function (e, t) {
      const n = ya(e);
      for (const e of n) {
        const t = ha(e);
        if (t) return t;
      }
      if (!t) return null;
      const a = ba[t.name];
      return wa.find((e) => e.name === a) || null;
    })(e, t);
  return { domainName: t?.name || "", factionName: n?.name || "" };
}
function xa(e, t) {
  return {
    currentRegion: e.currentRegion,
    currentLayer: e.currentLayer,
    environmentDesc: e.environmentDesc,
    recentMessages: e.recentMessages,
    domainName: t.domainName,
    factionName: t.factionName,
  };
}
function Sa(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function _a(e, t, n, a) {
  t &&
    0 !== n &&
    (e[t] || (e[t] = { score: 0, reasons: [] }),
    (e[t].score += n),
    e[t].reasons.push(`${n >= 0 ? "+" : ""}${n} ${a}`));
}
function Ba(e) {
  for (const [t, n] of Object.entries(e)) {
    const a = Math.max(0, n - 1);
    a <= 0 ? delete e[t] : (e[t] = a);
  }
}
function za(e, t, n) {
  n <= 0 ||
    t.forEach((t) => {
      t && (e[t] = n);
    });
}
function $a(e) {
  for (const [t, n] of Object.entries(Zn.CHARACTER_ALIASES))
    if (n.includes(e)) return { mainCharacterName: t, isAliasEntry: !0 };
  return { mainCharacterName: e, isAliasEntry: !1 };
}
function Da(e, t) {
  let n = 0;
  const a = [];
  for (const r of t) {
    const t = new RegExp(
        `(?:^|[^\\p{Script=Han}\\w])(${Sa(r)})(?:[^\\p{Script=Han}\\w]|$)`,
        "u",
      ),
      s = e.filter((e) => t.test(e)).length;
    s > 0 && ((n += s), a.push(`${r}(${s} lần)`));
  }
  return { count: n, details: a };
}
function Na(e, t) {
  const n = t.match(/^(?:\[地图\]|\[Bản\s*[đĐ]ồ(?:\s*thế\s*giới)?\])\s*(.+)$/i);
  if (!n) return null;
  const a = n[1].trim(),
    r = ga[a] ?? a;
  if ("世界空间结构" === r || "Cấu trúc không gian thế giới" === r) return null;
  const s = (function (e) {
      const t = {},
        n = String(e.currentRegion || "").trim(),
        a = String(e.currentLayer || "").trim(),
        r = String(
          e.mvuData?.ban_ton?.hanh_tung?.thong_tin_dan_duong || "",
        ).trim(),
        s = String(
          e.mvuData?.$tong_mon_suy_doan?.vuc_hien_tai ??
            e.mvuData?.$宗门推断?.当前域 ??
            "",
        ).trim(),
        o = Me(
          n,
          a,
          String(e.environmentDesc || ""),
          e.mvuData?.kho_dia_diem,
          e.mvuData?.ban_do_the_gioi,
          a,
        );
      (pa(n).forEach((e) => {
        _a(t, e, 100, `Khu vực hiện tại trúng khớp “${n}”`);
      }),
        pa(a).forEach((e) => {
          _a(t, e, 70, `Tầng lớp cha trúng khớp “${a}”`);
        }),
        pa(o).forEach((e) => {
          _a(t, e, 90, `Suy luận cha trúng khớp “${o}”`);
        }),
        pa(r).forEach((e) => {
          _a(t, e, 85, `Thông tin dẫn đường trúng khớp “${r}”`);
        }),
        pa(s).forEach((e) => {
          _a(t, e, 80, `Cache vực hiện tại trúng khớp “${s}”`);
        }));
      for (const [n, a] of Object.entries(fa)) {
        const r = e.recentMessages.filter((e) => e.includes(n)).length;
        r <= 0 ||
          a.forEach((e) =>
            _a(
              t,
              e,
              Math.min(36, 12 + 8 * r),
              `Tin nhắn gần đây nhắc đến từ khóa “${n}” ${r} lần`,
            ),
          );
      }
      la &&
        la.size > 0 &&
        la.forEach((e) =>
          _a(t, e, 18, "Tiếp tục sử dụng đánh giá bản đồ lần trước"),
        );
      for (const [e, n] of Object.entries(ca))
        _a(t, e, 12 * n, `Nhiệt độ bản đồ kéo dài ${n} vòng`);
      if (0 === Object.keys(t).length) {
        const n = ma(
          String(e.mvuData?.ban_ton?.hanh_tung?.tang_cap_truc_thuoc || ""),
        );
        oa[n]
          ? _a(t, oa[n], 15, `Dùng tầng lớp dự phòng “${n}”`)
          : _a(
              t,
              "Thần Châu",
              5,
              "Không có bằng chứng rõ ràng, sử dụng bản đồ mặc định dự phòng",
            );
      }
      return t;
    })(e),
    o = s[r] ?? { score: 0, reasons: [] },
    i = (function (e, t = 12) {
      return Object.entries(e)
        .map(([e, t]) => ({ name: e, score: t.score, reasons: t.reasons }))
        .sort((e, t) => t.score - e.score)
        .slice(0, t);
    })(s, 3),
    l =
      o.reasons.length > 0
        ? o.reasons
        : [
            i[0]
              ? `Ứng cử viên bản đồ có điểm số cao hơn hiện tại là “${i[0].name}”(${i[0].score} điểm)`
              : "Không thu thập được chứng cứ hữu hiệu hỗ trợ bản đồ này",
          ];
  return {
    matched: o.score >= 60,
    category: "Bản đồ",
    score: o.score,
    threshold: 60,
    reasons: l,
    source: "score",
    forced: "",
  };
}
function ka(e, t) {
  let stage = t;
  if (t === "Kỳ Tâm Động" || t === "Kỳ Rung Tâm") stage = "Kỳ Rung Động";
  return (
    ("Ngu Tịch Nhan" === e
      ? {
          "Kỳ Xa Lạ": [-999, -999],
          "Kỳ Hảo Cảm": [0, 40],
          "Kỳ Rung Động": [41, 80],
          "Kỳ Xác Nhận": [81, 120],
          "Kỳ Thâm Ái": [121, 200],
        }
      : {
          "Kỳ Xa Lạ": [-200, 40],
          "Kỳ Hảo Cảm": [41, 80],
          "Kỳ Rung Động": [81, 120],
          "Kỳ Xác Nhận": [121, 160],
          "Kỳ Thâm Ái": [161, 200],
        })[stage] ?? null
  );
}
function Va(e, t) {
  const n = t.match(/^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*([^-]+)$/i);
  if (!n) return null;
  const a = n[1].trim(),
    { mainCharacterName: r, isAliasEntry: s } = $a(a),
    o = e.mvuData?.hong_nhan?.[r],
    i = s ? [a] : [a, ...(Zn.CHARACTER_ALIASES[a] ?? [])],
    l = Da(e.recentMessages, i),
    c = [];
  let d = 0;
  if (!o) {
    if (l.count > 0) {
      const e = Math.min(75, 40 + 15 * l.count);
      return {
        matched: e >= 50,
        category: "Nhân vật",
        score: e,
        threshold: 50,
        reasons: [
          `+${e} Hồng nhan chưa vào danh sách, nhưng tin nhắn gần đây nhắc đến ${l.details.join("、")}, kích hoạt làm nóng trước cho nhân vật`,
        ],
        source: "score",
        forced: "",
      };
    }
    return {
      matched: !1,
      category: "Nhân vật",
      score: 0,
      threshold: 50,
      reasons: [
        `Nhân vật chính “${r}” không có trong danh sách Hồng Nhan, và tin nhắn gần đây không nhắc đến, tạm thời không làm nóng kích hoạt`,
      ],
      source: "score",
      forced: "",
    };
  }
  ((d += 20), c.push(`+20 Có “${r}” trong danh sách Hồng Nhan`));
  if (
    (e.recentMessages.length > 0 ||
      ((d += 35),
      c.push(
        "+35 Giai đoạn khởi đầu cho phép Hồng Nhan đã tồn tại trực tiếp sáng đèn",
      )),
    l.count > 0)
  ) {
    const e = Math.min(60, 30 + 12 * l.count);
    ((d += e),
      c.push(`+${e} Tin nhắn gần đây nhắc đến ${l.details.join("、")}`));
  }
  const u = da[r] ?? 0;
  if (u > 0) {
    const e = 15 * u;
    ((d += e), c.push(`+${e} Nhiệt độ nhân vật kéo dài ${u} vòng`));
  }
  return {
    matched: d >= 50,
    category: "Nhân vật",
    score: d,
    threshold: 50,
    reasons: c,
    source: "score",
    forced: "",
  };
}
function Ma(e, t) {
  const n = t.match(
    /^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*(.+?)\s*-\s*(Kỳ Xa Lạ|Kỳ Hảo Cảm|Kỳ Rung Động|Kỳ Tâm Động|Kỳ Rung Tâm|Kỳ Xác Nhận|Kỳ Thâm Ái)$/i,
  );
  if (!n) return null;
  const a = n[1].trim();
  let r = n[2];
  if (r === "Kỳ Tâm Động" || r === "Kỳ Rung Tâm") r = "Kỳ Rung Động";
  const s = `[Nhân Vật] ${a}`,
    o = Va(e, s),
    { mainCharacterName: i, isAliasEntry: l } = $a(a),
    c = e.mvuData?.hong_nhan?.[i];
  if (o && !o.matched)
    return {
      matched: !1,
      category: "Giai đoạn nhân vật",
      score: Math.min(o.score, 49),
      threshold: 70,
      reasons: [
        `Mục nhân vật chính “${s}” chưa đạt ngưỡng kích hoạt (${o.score}/${o.threshold}), cấm kích hoạt riêng mục giai đoạn`,
        ...o.reasons.slice(0, 3),
      ],
      source: "score",
      forced: "",
    };
  if (!c)
    return "Kỳ Xa Lạ" === r && o?.matched
      ? {
          matched: !0,
          category: "Giai đoạn nhân vật",
          score: Math.max(72, o.score + 18),
          threshold: 70,
          reasons: [
            `Mục nhân vật chính “${s}” đã kích hoạt làm nóng (${o.score}/${o.threshold})`,
            "Hồng nhan chưa chính thức vào danh sách, mục giai đoạn tạm thời ánh xạ mặc định sang Kỳ Xa Lạ",
            ...o.reasons.slice(0, 2),
          ],
          source: "score",
          forced: "",
        }
      : {
          matched: !1,
          category: "Giai đoạn nhân vật",
          score: 0,
          threshold: 70,
          reasons: [
            `Nhân vật chính “${i}” chưa vào danh sách Hồng Nhan, hiện tại không thể ánh xạ sang ${r}`,
          ],
          source: "score",
          forced: "",
        };
  const d = [];
  let u = 15;
  d.push(`+15 Có “${i}” trong danh sách Hồng Nhan`);
  const m = c.do_hao_cam ?? 0,
    p = (function (e, t) {
      const n = [
        "Kỳ Xa Lạ",
        "Kỳ Hảo Cảm",
        "Kỳ Rung Động",
        "Kỳ Xác Nhận",
        "Kỳ Thâm Ái",
      ];
      for (const a of n) {
        const n = ka(e, a);
        if (n && t >= n[0] && t <= n[1]) return a;
      }
      return null;
    })(i, m);
  if (p && p !== r)
    return {
      matched: !1,
      category: "Giai đoạn nhân vật",
      score: 15,
      threshold: 70,
      reasons: [
        `Độ hảo cảm hiện tại ${m} chỉ ánh xạ sang “${p}”, các giai đoạn của cùng một nhân vật xung khắc lẫn nhau`,
        `Giai đoạn này “${r}” không nên sáng đèn đồng thời với “${p}”`,
      ],
      source: "score",
      forced: "",
    };
  const f = ka(i, r);
  f &&
    (m >= f[0] && m <= f[1]
      ? ((u += 55),
        d.push(`+55 Độ hảo cảm ${m} rơi vào phạm vi ${r} [${f[0]}, ${f[1]}]`))
      : d.push(
          `+0 Độ hảo cảm ${m} không rơi vào phạm vi ${r} [${f[0]}, ${f[1]}]`,
        ));
  e.recentMessages.length > 0 ||
    ((u += 20),
    d.push(
      "+20 Giai đoạn khởi đầu cho phép mục giai đoạn hiện tại trực tiếp sáng đèn",
    ));
  const g = l ? [a] : [a, ...(Zn.CHARACTER_ALIASES[a] ?? [])],
    v = Da(e.recentMessages, g);
  if (v.count > 0) {
    const e = Math.min(50, 25 + 10 * v.count);
    ((u += e),
      d.push(`+${e} Tin nhắn gần đây nhắc đến ${v.details.join("、")}`));
  }
  const w = da[i] ?? 0;
  if (w > 0) {
    const e = 12 * w;
    ((u += e), d.push(`+${e} Nhiệt độ giai đoạn nhân vật kéo dài ${w} vòng`));
  }
  return {
    matched: u >= 70,
    category: "Giai đoạn nhân vật",
    score: u,
    threshold: 70,
    reasons: d,
    source: "score",
    forced: "",
  };
}
function Ra(e, t) {
  const n = (function (e) {
    return ea.forced_enable_entries.includes(e)
      ? "enable"
      : ea.forced_disable_entries.includes(e)
        ? "disable"
        : "";
  })(t);
  return n
    ? {
        matched: "enable" === n,
        category: "Ghi đè thủ công",
        score: "enable" === n ? 999 : -1,
        threshold: 1,
        reasons: [
          "enable" === n
            ? "Đã bắt buộc mở thủ công trong bảng mở rộng"
            : "Đã bắt buộc đóng thủ công trong bảng mở rộng",
        ],
        source: "override",
        forced: n,
      }
    : (Na(e, t) ?? Ma(e, t) ?? Va(e, t));
}
function Ta(e, t) {
  return {
    name: e,
    category: t.category,
    score: t.score,
    threshold: t.threshold,
    matched: t.matched,
    source: t.source,
    forced: t.forced,
    reasons: t.reasons.slice(0, 6),
  };
}
function Ua(e) {
  return e.match(/^\[([^\]]+)\]/)?.[1] ?? "规则";
}
var ja = [
  {
    entryPattern: /^(?:\[系统\]|\[Hệ\s*[tT]hống\])/i,
    shouldEnable: () => !0,
    priority: 100,
  },
  { entryPattern: /^\[mvu_update\]/, shouldEnable: () => !0, priority: 100 },
  {
    entryPattern:
      /^(?:\[mvu\]变量列表|Danh Sách Biến|\[mvu\]\s*Danh\s*sách\s*biến)$/i,
    shouldEnable: () => !0,
    priority: 100,
  },
  {
    entryPattern:
      /^(?:\[地图\]\s*世界空间结构|\[Bản\s*[đĐ]ồ\]\s*Cấu\s*trúc\s*không\s*gian\s*thế\s*giới)$/i,
    shouldEnable: () => !0,
    priority: 100,
  },
  {
    entryPattern:
      /(?:宗门势力-低token底板|\[宗门\]\s*底板|Thế lực tông môn - Phông nền token thấp|\[Tông Môn\]\s*Phông nền|\[Tông\s*môn\]\s*Khung)/i,
    shouldEnable: () => !0,
    priority: 95,
  },
  {
    entryPattern:
      /(?:宗门势力-当前地域ESJ|\[宗门\]\s*当前地域|Thế lực tông môn - Khu vực hiện tại|\[Tông Môn\]\s*Khu vực hiện tại|\[Tông\s*môn\]\s*Khu\s*vực\s*hiện\s*tại)/i,
    shouldEnable: (e) => {
      const t = Aa(e);
      return (
        Zn.DEBUG &&
          t &&
          console.log(
            `[Cập nhật Thế giới] ✅ Tông môn khu vực hiện tại: Khớp vực=${t.name} (Khu vực="${e.currentRegion}", Tầng lớp="${e.currentLayer}")`,
          ),
        null !== t
      );
    },
    priority: 94,
  },
  {
    entryPattern:
      /(?:宗门势力-当前主势力ESJ|\[宗门\]\s*当前主势力|Thế lực tông môn - Thế lực chính hiện tại|\[Tông Môn\]\s*Thế lực chính hiện tại|\[Tông\s*môn\]\s*Thế\s*lực\s*chính\s*hiện\s*tại)/i,
    shouldEnable: (e) => {
      const t = Ca(e);
      return (
        Zn.DEBUG &&
          (t.domainName || t.factionName) &&
          console.log(
            `[Cập nhật Thế giới] ✅ Tông môn thế lực chính hiện tại: Vực="${t.domainName || "Không"}", Thế lực chính="${t.factionName || "Không"}"`,
          ),
        !(!t.domainName && !t.factionName)
      );
    },
    priority: 93,
  },
  {
    entryPattern: /^(?:\[地图\]|\[Bản\s*[đĐ]ồ(?:\s*thế\s*giới)?\])\s*(.+)$/i,
    shouldEnable: (e, t) => {
      if (!t) return !1;
      const n = t.match(
        /^(?:\[地图\]|\[Bản\s*[đĐ]ồ(?:\s*thế\s*giới)?\])\s*(.+)$/i,
      );
      if (!n) return !1;
      const a = n[1].trim(),
        r = ga[a] ?? a;
      if ("世界空间结构" === r || "Cấu trúc không gian thế giới" === r)
        return !0;
      const s = new Set();
      if (
        (pa(e.currentRegion, "Khu vực→").forEach((e) => s.add(e)),
        pa(e.currentLayer, "Tầng lớp→").forEach((e) => s.add(e)),
        0 === s.size && e.currentRegion && e.mvuData?.kho_dia_diem)
      ) {
        const t = ma(e.currentRegion),
          n =
            e.mvuData.kho_dia_diem[e.currentRegion] ||
            e.mvuData.kho_dia_diem[t];
        if (n?.vuc) {
          const t = ia[n.vuc];
          t &&
            (t.forEach((e) => s.add(e)),
            Zn.DEBUG &&
              console.log(
                `[Cập nhật Thế giới] Khớp vực của kho địa điểm: ${e.currentRegion} → Vực=${n.vuc}`,
              ));
        }
        if (0 === s.size && t.length >= 2)
          for (const [n, a] of Object.entries(e.mvuData.kho_dia_diem))
            if (!(n.length < 2) && (t.includes(n) || n.includes(t))) {
              const e = ia[a.vuc];
              if (e) {
                (e.forEach((e) => s.add(e)),
                  Zn.DEBUG &&
                    console.log(
                      `[Cập nhật Thế giới] Khớp bao hàm của kho địa điểm: "${t}" ↔ "${n}" → Vực=${a.vuc}`,
                    ));
                break;
              }
            }
      }
      if (
        (s.size > 0 && (la = new Set(s)),
        0 === s.size &&
          la &&
          la.size > 0 &&
          (la.forEach((e) => s.add(e)),
          Zn.DEBUG &&
            console.log(
              `[Cập nhật Thế giới] Suy luận quán tính: Tiếp tục sử dụng khớp lần trước [${[...la].join(",")}]`,
            )),
        0 === s.size && e.mvuData?.ban_ton?.hanh_tung?.tang_cap_truc_thuoc)
      ) {
        const t = ma(e.mvuData.ban_ton.hanh_tung.tang_cap_truc_thuoc);
        oa[t] && s.add(oa[t]);
      }
      if (0 === s.size)
        for (const [t, n] of Object.entries(fa))
          e.recentMessages.some((e) => e.includes(t)) &&
            n.forEach((e) => s.add(e));
      0 === s.size && s.add("Thần Châu");
      const o = s.has(r);
      return (
        Zn.DEBUG &&
          o &&
          console.log(
            `[Cập nhật Thế giới] Khớp bản đồ thành công: ${a} (Tên chuẩn=${r}, Khu vực hiện tại=${e.currentRegion}, Tầng lớp=${e.currentLayer}, Tập kích hoạt=[${[...s].join(",")}])`,
          ),
        o
      );
    },
    priority: 10,
  },
  {
    entryPattern:
      /^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*(.+?)\s*-\s*(Kỳ Xa Lạ|Kỳ Hảo Cảm|Kỳ Rung Động|Kỳ Tâm Động|Kỳ Rung Tâm|Kỳ Xác Nhận|Kỳ Thâm Ái)$/i,
    shouldEnable: (e, t) => {
      if (!t) return !1;
      const n = t.match(
        /^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*(.+?)\s*-\s*(Kỳ Xa Lạ|Kỳ Hảo Cảm|Kỳ Rung Động|Kỳ Tâm Động|Kỳ Rung Tâm|Kỳ Xác Nhận|Kỳ Thâm Ái)$/i,
      );
      if (!n) return !1;
      const a = n[1].trim();
      let r = n[2];
      if (r === "Kỳ Tâm Động" || r === "Kỳ Rung Tâm") r = "Kỳ Rung Động";
      const s = e.mvuData?.hong_nhan?.[a];
      if (!s)
        return (
          Zn.DEBUG &&
            console.log(
              `[Cập nhật Thế giới] Nhân vật không trong danh sách Hồng Nhan: ${a}`,
            ),
          !1
        );
      if (e.recentMessages.length > 0) {
        const t = [a];
        Zn.CHARACTER_ALIASES[a] && t.push(...Zn.CHARACTER_ALIASES[a]);
        let n = !1;
        for (const r of t) {
          const t = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            s = new RegExp(
              `(?:^|[^\\p{Script=Han}\\w])(${t})(?:[^\\p{Script=Han}\\w]|$)`,
              "u",
            );
          if (e.recentMessages.some((e) => s.test(e))) {
            ((n = !0),
              Zn.DEBUG &&
                console.log(
                  `[Cập nhật Thế giới] Khớp với biệt danh: ${r} -> ${a}`,
                ));
            break;
          }
        }
        if (!n)
          return (
            Zn.DEBUG &&
              console.log(
                `[Cập nhật Thế giới] Nhân vật không được nhắc đến gần đây: ${a} (gồm biệt danh)`,
              ),
            !1
          );
      } else
        Zn.DEBUG &&
          console.log(
            `[Cập nhật Thế giới] Khởi đầu không tin nhắn, trực tiếp mở theo giai đoạn hảo cảm: ${a}`,
          );
      const o = (
        "Ngu Tịch Nhan" === a
          ? {
              "Kỳ Xa Lạ": [-999, -999],
              "Kỳ Hảo Cảm": [0, 40],
              "Kỳ Rung Động": [41, 80],
              "Kỳ Xác Nhận": [81, 120],
              "Kỳ Thâm Ái": [121, 200],
            }
          : {
              "Kỳ Xa Lạ": [-200, 40],
              "Kỳ Hảo Cảm": [41, 80],
              "Kỳ Rung Động": [81, 120],
              "Kỳ Xác Nhận": [121, 160],
              "Kỳ Thâm Ái": [161, 200],
            }
      )[r];
      if (!o) return !1;
      const i = s.do_hao_cam ?? 0,
        l = i >= o[0] && i <= o[1];
      return (
        Zn.DEBUG &&
          console.log(
            `[Cập nhật Thế giới] Khớp giai đoạn nhân vật: ${a} - ${r}, hảo cảm=${i}, phạm vi=[${o[0]}, ${o[1]}], Khớp=${l}`,
          ),
        l
      );
    },
    priority: 9,
  },
  {
    entryPattern: /^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*([^-]+)$/i,
    shouldEnable: (e, t) => {
      if (!t) return !1;
      const n = t.match(/^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*([^-]+)$/i);
      if (!n) return !1;
      const a = n[1].trim();
      Zn.DEBUG &&
        (console.log(`[Cập nhật Thế giới] 🔍 Kiểm tra nhân vật: ${a}`),
        console.log(
          `[Cập nhật Thế giới] 🔍 Tin nhắn gần đây (${e.recentMessages.length} bản):`,
          e.recentMessages,
        ));
      let r = a,
        s = !1;
      for (const [e, t] of Object.entries(Zn.CHARACTER_ALIASES))
        if (t.includes(a)) {
          ((r = e),
            (s = !0),
            Zn.DEBUG &&
              console.log(
                `[Cập nhật Thế giới] 🔗 Nhận diện mục biệt danh: ${a} -> Nhân vật chính: ${e}`,
              ));
          break;
        }
      if (!(e.recentMessages.length > 0)) {
        const t = void 0 !== e.mvuData?.hong_nhan?.[r];
        return (
          Zn.DEBUG &&
            (t
              ? console.log(
                  `[Cập nhật Thế giới] ✅ Khởi đầu-nên mở: ${a}${s ? ` (Nhân vật chính: ${r})` : ""} (Trong danh sách Hồng Nhan)`,
                )
              : console.log(
                  `[Cập nhật Thế giới] ❌ Khởi đầu-không nên mở: ${a}${s ? ` (Nhân vật chính: ${r})` : ""} (Không trong danh sách Hồng Nhan)`,
                )),
          t
        );
      }
      let o;
      s
        ? (o = [a])
        : ((o = [a]),
          Zn.CHARACTER_ALIASES[a] && o.push(...Zn.CHARACTER_ALIASES[a]));
      let i = 0;
      const l = [];
      for (const t of o) {
        const n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          a = new RegExp(
            `(?:^|[^\\p{Script=Han}\\w])(${n})(?:[^\\p{Script=Han}\\w]|$)`,
            "u",
          ),
          r = e.recentMessages.filter((e) => a.test(e)).length;
        r > 0 &&
          ((i += r),
          l.push(`${t}(${r} lần)`),
          Zn.DEBUG &&
            console.log(
              `[Cập nhật Thế giới] 🔍 Khớp trúng: ${t}, RegExp=${a}, số lần=${r}`,
            ));
      }
      const c = i >= 1;
      if (Zn.DEBUG) {
        const e = s ? ` [Mục biệt danh -> ${r}]` : "",
          t =
            !s && Zn.CHARACTER_ALIASES[a]
              ? ` [Biệt danh: ${Zn.CHARACTER_ALIASES[a].join(", ")}]`
              : "",
          n = l.length > 0 ? ` Chi tiết nhắc đến: ${l.join(", ")}` : "";
        c
          ? console.log(
              `[Cập nhật Thế giới] ✅ Nên mở: ${a}${e}${t}, lũy kế nhắc đến=${i} lần${n}`,
            )
          : console.log(
              `[Cập nhật Thế giới] ❌ Không nên mở: ${a}${e}${t}, lũy kế nhắc đến=${i} lần (cần ≥1 lần)`,
            );
      }
      return c;
    },
    priority: 8,
  },
  {
    entryPattern: /^(?:\[境界\]|\[Cảnh\s*giới\])\s*(.+)$/i,
    shouldEnable: (e, t) => {
      if (!t) return !1;
      const n = t.match(/^(?:\[境界\]|\[Cảnh\s*giới\])\s*(.+)$/i);
      if (!n) return !1;
      const a = n[1].trim(),
        r = e.mvuData?.ban_ton?.cap_do ?? 1,
        s = {
          "Luyện Khí": [1, 4],
          "Trúc Cơ": [5, 8],
          "Kim Đan": [9, 12],
          "Nguyên Anh": [13, 16],
          "Hóa Thần": [17, 20],
          "Luyện Hư": [21, 24],
          "Hợp Thể": [25, 28],
          "Đại Thừa": [29, 32],
          "Độ Kiếp": [33, 36],
        }[a];
      if (!s)
        return (
          Zn.DEBUG &&
            console.log(`[Cập nhật Thế giới] Tên cảnh giới chưa biết: ${a}`),
          !1
        );
      const o = r >= s[0] && r <= s[1];
      return (
        Zn.DEBUG &&
          console.log(
            `[Cập nhật Thế giới] Khớp cảnh giới: ${a}, Cấp độ=${r}, phạm vi=[${s[0]}, ${s[1]}], Khớp=${o}`,
          ),
        o
      );
    },
    priority: 7,
  },
  {
    entryPattern: /^(?:\[红颜索引\]|\[Chỉ\s*mục\s*hồng\s*nhan\])$/i,
    shouldEnable: () => !0,
    priority: 100,
  },
  {
    entryPattern:
      /^(?:\[(物品|法宝|功法|势力|地点|灵根|体质)\]|\[(Vật\s*phẩm|Pháp\s*bảo|Công\s*pháp|Thế\s*lực|Địa\s*điểm|Linh\s*căn|Thể\s*chất)\])\s*(.+)$/i,
    shouldEnable: (e, t) => {
      if (!t) return !1;
      const n = t.match(
        /^(?:\[(物品|法宝|功法|势力|地点|灵根|体质)\]|\[(Vật\s*phẩm|Pháp\s*bảo|Công\s*pháp|Thế\s*lực|Địa\s*điểm|Linh\s*căn|Thể\s*chất)\])\s*(.+)$/i,
      );
      if (!n) return !1;
      const a = n[1] || n[2],
        r = n[3].trim(),
        s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        o = new RegExp(s, "u"),
        i = e.recentMessages.filter((e) => o.test(e)).length,
        l = i >= 2;
      return (
        Zn.DEBUG &&
          i > 0 &&
          console.log(
            `[Cập nhật Thế giới] Khớp ${a}: ${r}, số lần nhắc đến=${i}, mở=${l}`,
          ),
        l
      );
    },
    priority: 5,
  },
];
function Fa() {
  return [...ja].sort((e, t) => (t.priority ?? 0) - (e.priority ?? 0));
}
function Oa(e, t, n = Fa()) {
  let a = null,
    r = Ra(e, t);
  return (
    r ||
      ((a = (function (e, t = Fa()) {
        for (const n of t)
          if (
            "string" == typeof n.entryPattern
              ? e.includes(n.entryPattern)
              : n.entryPattern.test(e)
          )
            return n;
        return null;
      })(t, n)),
      a &&
        (r = (function (e, t, n) {
          try {
            const a = n.shouldEnable(e, t);
            return {
              matched: a,
              category: Ua(t),
              score: a ? 18 : 0,
              threshold: 1,
              reasons: [
                a
                  ? "Khớp quy tắc boolean, quyết định nên sáng đèn"
                  : "Không khớp quy tắc boolean, vòng này không sáng đèn",
              ],
              source: "rule",
              forced: "",
            };
          } catch (e) {
            return (
              console.error(
                `[Cập nhật Thế giới] Lỗi khi đánh giá mục "${t}":`,
                e,
              ),
              null
            );
          }
        })(e, t, a))),
    r ? { decision: r, matchedRule: a } : null
  );
}
function Ga() {
  let e = Zn.WORLDBOOK_NAME;
  if ("current" === e) {
    const names = getCharWorldbookNames("current");
    e = names.primary || (names.secondary && names.secondary.length > 0 ? names.secondary[0] : "");
  }
  return e;
}
async function La(e) {
  let t = [];
  return (
    await updateWorldbookWith(
      e,
      (e) => (
        (t = e.map((e) => ({
          enabled: Boolean(e.enabled),
          name: String(e.name || ""),
          strategyType: String(e.strategy?.type || ""),
        }))),
        e
      ),
    ),
    t
  );
}
function Ia(e) {
  const t = e.match(
    /^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*(.+?)\s*-\s*(Kỳ Xa Lạ|Kỳ Hảo Cảm|Kỳ Rung Động|Kỳ Tâm Động|Kỳ Rung Tâm|Kỳ Xác Nhận|Kỳ Thâm Ái)$/i,
  );
  if (t) return $a(t[1].trim()).mainCharacterName;
  const n = e.match(/^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*([^-]+)$/i);
  return n ? $a(n[1].trim()).mainCharacterName : null;
}
function Pa(e, t) {
  const n = Fa(),
    a = {
      currentRegion: "",
      currentLayer: "",
      environmentDesc: "",
      recentMessages: [],
      mvuData: null,
    },
    r = (function () {
      const e = new Set();
      return (
        Object.values(sa).forEach((t) => t.forEach((t) => e.add(t))),
        Object.values(ia).forEach((t) => t.forEach((t) => e.add(t))),
        Object.values(fa).forEach((t) => t.forEach((t) => e.add(t))),
        Object.values(oa).forEach((t) => e.add(t)),
        Object.keys(ga).forEach((t) => e.add(t)),
        Object.values(ga).forEach((t) => e.add(t)),
        e
      );
    })(),
    s = new Set(e.map((e) => e.name).filter(Boolean)),
    o = [],
    i = [],
    l = [],
    c = [];
  let d = 0,
    u = 0;
  for (const s of e) {
    if (!s.enabled || !s.name) continue;
    Oa(a, s.name, n) ? o.push(s.name) : i.push(s.name);
    const e = s.name.match(
      /^(?:\[地图\]|\[Bản\s*[đĐ]ồ(?:\s*thế\s*giới)?\])\s*(.+)$/i,
    );
    if (e) {
      d++;
      const t = ga[e[1].trim()] ?? e[1].trim();
      "Cấu trúc không gian thế giới" === t || r.has(t) || l.push(s.name);
    }
    const m = Ia(s.name);
    m &&
      (u++, t?.mvuData?.hong_nhan && !t.mvuData.hong_nhan[m] && c.push(s.name));
  }
  const m = ea.forced_enable_entries.filter((e) =>
      ea.forced_disable_entries.includes(e),
    ),
    p = [...ea.forced_enable_entries, ...ea.forced_disable_entries].filter(
      (e) => !s.has(e),
    );
  return {
    checkedAt: Date.now(),
    totalEntries: e.filter((e) => e.enabled && e.name).length,
    managedEntries: o.length,
    unmanagedEntries: i.length,
    mapEntries: d,
    characterEntries: u,
    unmappedMapEntries: Array.from(new Set(l)).slice(0, 12),
    unknownCharacterEntries: Array.from(new Set(c)).slice(0, 12),
    unmanagedSamples: i.slice(0, 12),
    overrideConflicts: Array.from(new Set(m)).slice(0, 12),
    orphanOverrideEntries: Array.from(new Set(p)).slice(0, 12),
  };
}
async function Ha(e) {
  const t = (function (e, t) {
      return {
        currentRegion:
          String(t.currentRegion || e?.currentRegion || "Chưa biết").trim() ||
          "Chưa biết",
        currentLayer: String(t.currentLayer || e?.currentLayer || "").trim(),
        environmentDesc: String(
          t.environmentDesc || e?.environmentDesc || "",
        ).trim(),
        recentMessages: t.recentMessages
          .map((e) => String(e).trim())
          .filter(Boolean)
          .slice(0, 8),
        mvuData: e?.mvuData ?? null,
      };
    })(await func_tr(), e),
    n = Ga();
  if (!n)
    throw new Error(
      "Thẻ nhân vật hiện tại không liên kết với Thế giới thư chính",
    );
  const a = await La(n),
    r = Fa(),
    s = a
      .filter((e) => e.enabled && e.name)
      .map((e) => {
        const n = Oa(t, e.name, r);
        return n ? Ta(e.name, n.decision) : null;
      })
      .filter((e) => Boolean(e));
  return {
    worldbookName: n,
    context: t,
    topScoredEntries: [...s]
      .filter((e) => e.score > 0 || "" !== e.forced)
      .sort((e, t) => t.score - e.score)
      .slice(0, 16),
    matchedEntries: s
      .filter((e) => e.matched)
      .sort((e, t) => t.score - e.score)
      .map((e) => e.name)
      .slice(0, 24),
  };
}
var Wa = !1,
  Ya = 0,
  qa = null,
  Qa = "";
function Xa(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Ja(e) {
  let t = e || "";
  return (
    (t = t.replace(/\[(?:动态世界书|Cập nhật Thế giới)\][^\n]*/g, "")),
    (t = t.replace(/【[^】]*】/g, "")),
    (t = t.replace(/<UpdateVariable>[\s\S]*?<\/UpdateVariable>/g, "")),
    (t = t.replace(/```mvu_update[\s\S]*?```/g, "")),
    (t = t.replace(/```[\s\S]*?```/g, "")),
    t.trim()
  );
}
function Ka() {
  const e = $("#send_textarea").get(0);
  return Ja(e?.value || "");
}
async function Za(e = 5e3) {
  const t = Date.now();
  for (; Wa || qa; ) {
    if (Date.now() - t >= e)
      return void (
        Zn.DEBUG &&
        console.warn(
          "[Cập nhật Thế giới] Chờ đường ống cập nhật rỗi quá giờ, tiếp tục thực hiện cưỡng chế làm mới",
        )
      );
    await Xa(20);
  }
}
async function func_er() {
  try {
    const e = new Promise((e) => {
        setTimeout(() => e(!1), Zn.MVU_INIT_TIMEOUT);
      }),
      t = (async () => (await waitGlobalInitialized("Mvu"), !0))();
    return await Promise.race([t, e]);
  } catch (e) {
    return (
      console.warn("[Cập nhật Thế giới] Chờ MVU khởi tạo thất bại", e),
      !1
    );
  }
}
async function func_tr(e) {
  if (!(await func_er()))
    return (
      Zn.DEBUG &&
        console.log(
          "[Cập nhật Thế giới] MVU chưa sẵn sàng, bỏ qua cập nhật lần này",
        ),
      null
    );
  let t = [];
  try {
    const e = getLastMessageId();
    if (e >= 0) {
      const n = getChatMessages(`0-${e}`);
      n &&
        n.length > 0 &&
        ((t = n
          .slice(-Zn.CONTEXT_WINDOW)
          .map((e) => Ja(e.message || ""))
          .filter((e) => e.length > 0)),
        Zn.DEBUG &&
          console.log(
            "[Cập nhật Thế giới] 🔍 Nội dung tin nhắn sau khi lọc:",
            t,
          ));
    }
  } catch (e) {
    (Zn.DEBUG && console.warn("[Cập nhật Thế giới] Lấy tin nhắn thất bại", e),
      (t = []));
  }
  t = (function (e, t) {
    const n = Ja(t || "");
    if (!n) return e;
    const a = e.filter(Boolean);
    return a.at(-1) === n
      ? a
      : [...a, n].slice(-Math.max(Zn.CONTEXT_WINDOW, 1));
  })(t, e);
  let n = null;
  try {
    if (getLastMessageId() >= 0) {
      const e = getVariables({ type: "message", message_id: -1 }),
        t = _.get(e, "stat_data", null);
      t && (n = _r.parse(t));
    }
    if (!n)
      return (
        Zn.DEBUG &&
          console.log(
            "[Cập nhật Thế giới] Dữ liệu MVU chưa sẵn sàng, bỏ qua cập nhật lần này",
          ),
        null
      );
  } catch (e) {
    return (
      console.warn("[Cập nhật Thế giới] Lấy dữ liệu MVU thất bại", e),
      null
    );
  }
  const a = (
      n?.ban_ton?.hanh_tung?.khu_vuc_hien_tai ??
      n?.本尊?.行踪?.当前区域 ??
      "Chưa biết"
    ).trim(),
    r = (
      n?.ban_ton?.hanh_tung?.tang_cap_truc_thuoc ??
      n?.本尊?.行踪?.所属层级 ??
      ""
    ).trim(),
    s = (
      n?.ban_ton?.hanh_tung?.mo_ta_moi_truong ??
      n?.hoan_canh_hien_tai ??
      n?.本尊?.行踪?.环境描述 ??
      ""
    ).trim();
  return (
    Zn.DEBUG &&
      console.log(
        `[Cập nhật Thế giới] Ngữ cảnh: Khu vực="${a}", Tầng="${r}", Số tin nhắn=${t.length}`,
      ),
    {
      currentRegion: a,
      currentLayer: r,
      environmentDesc: s,
      recentMessages: t,
      mvuData: n,
    }
  );
}
async function func_nr(e = "enable", t = {}) {
  const n = {
    mode: e,
    force: t.force ?? !1,
    reason: t.reason ?? "unknown",
    allowWhenDisabled: t.allowWhenDisabled ?? !1,
    latestMessageHint: t.latestMessageHint ?? "",
  };
  if (!ea.enabled && !n.allowWhenDisabled) {
    const t = "Cập nhật Thế giới đã dừng hoạt động, bỏ qua tự động làm mới";
    return (
      Zn.DEBUG && console.log(`[Cập nhật Thế giới] ${t}: ${n.reason}`),
      Ge({
        lastReason: n.reason,
        lastMode: e,
        lastUpdatedAt: Date.now(),
        lastMessage: t,
        processing: !1,
        pendingReason: "",
        queuedReason: "",
        settings: ta(),
      })
    );
  }
  if (!((ea.enabled && ea.auto_apply) || n.allowWhenDisabled)) {
    const t =
      "Tự động áp dụng đã tắt, lần này chỉ giữ trạng thái bảng điều khiển";
    return (
      Zn.DEBUG && console.log(`[Cập nhật Thế giới] ${t}: ${n.reason}`),
      Ge({
        lastReason: n.reason,
        lastMode: e,
        lastUpdatedAt: Date.now(),
        lastMessage: t,
        processing: !1,
        pendingReason: "",
        queuedReason: "",
        settings: ta(),
      })
    );
  }
  const a = Date.now();
  if (!n.force && a - Ya < Zn.DEBOUNCE_DELAY)
    return (
      Zn.DEBUG &&
        console.log(
          `[Cập nhật Thế giới] Kích hoạt quá thường xuyên, bỏ qua cập nhật lần này: ${n.reason}`,
        ),
      Ge({
        lastReason: n.reason,
        lastMode: e,
        lastUpdatedAt: Date.now(),
        lastMessage: `Kích hoạt quá thường xuyên, đã bỏ qua ${n.reason}`,
        processing: !1,
        pendingReason: "",
        queuedReason: qa?.reason ?? "",
      })
    );
  if (Wa)
    return (
      (r = n),
      (qa && !r.force && qa.force) || (qa = r),
      Zn.DEBUG &&
        console.log(
          `[Cập nhật Thế giới] Đang xử lý, đã xếp hàng đợi cập nhật tiếp theo: ${n.reason}`,
        ),
      Ge({
        queuedReason: qa?.reason ?? n.reason,
        lastMessage: `Đã có nhiệm vụ đang thực thi, đã xếp hàng ${n.reason}`,
      })
    );
  var r;
  ((Ya = a),
    (Wa = !0),
    Ge({
      processing: !0,
      pendingReason: n.reason,
      queuedReason: qa?.reason ?? "",
      lastReason: n.reason,
      lastMode: e,
      lastUpdatedAt: Date.now(),
      lastError: "",
      lastMessage: `Bắt đầu thực thi ${n.reason}`,
      settings: ta(),
    }));
  try {
    const t = await func_tr(n.latestMessageHint);
    if (!t)
      return (
        Zn.DEBUG &&
          console.log(
            "[Cập nhật Thế giới] Ngữ cảnh chưa sẵn sàng, bỏ qua cập nhật lần này",
          ),
        Ge({
          processing: !1,
          pendingReason: "",
          lastReason: n.reason,
          lastMode: e,
          lastUpdatedAt: Date.now(),
          lastMessage:
            "Ngữ cảnh chưa sẵn sàng, lần này chưa thực hiện cập nhật Thế giới thư",
          context: null,
        })
      );
    const a = (function (e) {
      const t = Ca(e),
        n = { type: "message", message_id: -1 },
        a = getVariables(n),
        r = String(_.get(a, "__sect_prompt_state.domain", "") || "").trim(),
        s = String(_.get(a, "__sect_prompt_state.faction", "") || "").trim(),
        o = String(
          _.get(a, "stat_data.$tong_mon_suy_doan.vuc_hien_tai") ??
            _.get(a, "stat_data.$宗门推断.当前域", ""),
        ).trim(),
        i = String(
          _.get(a, "stat_data.$tong_mon_suy_doan.the_luc_chinh_hien_tai") ??
            _.get(a, "stat_data.$宗门推断.当前主势力", ""),
        ).trim();
      return (
        (o === t.domainName &&
          i === t.factionName &&
          r === t.domainName &&
          s === t.factionName) ||
          (_.set(a, "__sect_prompt_state.domain", t.domainName),
          _.set(a, "__sect_prompt_state.faction", t.factionName),
          !_.has(a, "stat_data.$tong_mon_suy_doan") &&
            _.set(a, "stat_data.$tong_mon_suy_doan", {
              vuc_hien_tai: "",
              the_luc_chinh_hien_tai: "",
            }),
          _.set(a, "stat_data.$tong_mon_suy_doan.vuc_hien_tai", t.domainName),
          _.set(
            a,
            "stat_data.$tong_mon_suy_doan.the_luc_chinh_hien_tai",
            t.factionName,
          ),
          _.has(a, "stat_data.$宗门推断") &&
            (_.set(a, "stat_data.$宗门推断.当前域", t.domainName),
            _.set(a, "stat_data.$宗门推断.当前主势力", t.factionName)),
          replaceVariables(a, n),
          Zn.DEBUG &&
            console.log(
              `[Cập nhật Thế giới] 🧭 Suy đoán tông môn đã đồng bộ: Vực="${t.domainName || "Không"}", Thế lực chính="${t.factionName || "Không"}"`,
            )),
        t
      );
    })(t);
    (Ba(ca), Ba(da));
    const r = Ga();
    if (!r)
      return (
        console.warn(
          "[Cập nhật Thế giới] Thẻ nhân vật hiện tại chưa liên kết với Thế giới thư chính",
        ),
        Ge({
          processing: !1,
          pendingReason: "",
          lastReason: n.reason,
          lastMode: e,
          lastUpdatedAt: Date.now(),
          lastMessage:
            "Thẻ nhân vật hiện tại chưa liên kết với Thế giới thư chính",
          lastError:
            "Thẻ nhân vật hiện tại chưa liên kết với Thế giới thư chính",
          context: xa(t, a),
        })
      );
    let s = 0,
      o = 0,
      i = 0,
      l = [];
    const c = [],
      d = [],
      u = Fa();
    (await updateWorldbookWith(r, (n) => {
      Zn.DEBUG &&
        (console.log(
          `[Cập nhật Thế giới] Bắt đầu xử lý Thế giới thư [chế độ ${e}]: ${r}, tổng cộng ${n.length} mục`,
        ),
        console.log(
          `[Cập nhật Thế giới] Ngữ cảnh hiện tại: Khu vực="${t.currentRegion}", Cấp độ=${t.mvuData?.ban_ton?.cap_do ?? t.mvuData?.本尊?.等级 ?? "Chưa biết"}, Số tin nhắn=${t.recentMessages.length}`,
        ),
        console.log(
          `[Cập nhật Thế giới] Suy đoán tông môn hiện tại: Vực="${a.domainName || "Không"}", Thế lực chính="${a.factionName || "Không"}"`,
        ));
      for (const a of n) {
        if (!a.enabled) continue;
        const n = a.name || "";
        if (!n) {
          Zn.DEBUG &&
            console.warn(
              "[Cập nhật Thế giới] Phát hiện mục không có tên, bỏ qua",
            );
          continue;
        }
        const r = Oa(t, n, u);
        if (!r) continue;
        let l = r.decision;
        const m = a.strategy.type;
        if ("enable" === e) {
          d.push(Ta(n, l));
          const t =
            /^(?:\[系统\]|\[Hệ\s*[tT]hống\])/i.test(n) ||
            /^\[mvu_update\]/.test(n) ||
            /^(?:\[mvu\]变量列表|Danh Sách Biến|\[mvu\]\s*Danh\s*sách\s*biến)$/i.test(
              n,
            ) ||
            /^(?:\[红颜索引\]|\[Chỉ\s*mục\s*hồng\s*nhan\])$/i.test(n);
          l.matched && "constant" !== m
            ? ((a.strategy.type = "constant"),
              s++,
              i++,
              c.push({ name: n, from: m, to: "constant", mode: e }),
              Zn.DEBUG &&
                console.log(
                  `[Cập nhật Thế giới] ✅ Bật (Xanh lá→Xanh dương): ${n}`,
                ))
            : l.matched ||
              "constant" !== m ||
              t ||
              ((a.strategy.type = "selective"),
              o++,
              i++,
              c.push({ name: n, from: m, to: "selective", mode: e }),
              Zn.DEBUG &&
                console.log(
                  `[Cập nhật Thế giới] ⚠️ Tắt (Xanh dương→Xanh lá): ${n}`,
                ));
        } else if ("constant" === m) {
          d.push(Ta(n, l));
          let t = !1;
          ((t =
            "enable" === l.forced ||
            ("disable" !== l.forced &&
              Zn.KEEP_ENABLED_AFTER_REPLY.some((e) => e.test(n)))),
            t ||
              ((a.strategy.type = "selective"),
              o++,
              i++,
              c.push({ name: n, from: m, to: "selective", mode: e }),
              Zn.DEBUG &&
                console.log(
                  `[Cập nhật Thế giới] ⚠️ Đổi sang đèn xanh lá: ${n}`,
                )));
        }
      }
      return (
        (l = n
          .filter((e) => e.enabled && "constant" === e.strategy.type && e.name)
          .map((e) => e.name)),
        Zn.DEBUG &&
          console.log(
            `[Cập nhật Thế giới] Xử lý hoàn tất [chế độ ${e}], sửa ${i} mục (Bật ${s}, Tắt ${o})`,
          ),
        n
      );
    }),
      (function (e) {
        const t = new Set(),
          n = new Set();
        (e.forEach((e) => {
          const a = e.match(
            /^(?:\[地图\]|\[Bản\s*[đĐ]ồ(?:\s*thế\s*giới)?\])\s*(.+)$/i,
          );
          if (a) {
            const e = ga[a[1].trim()] ?? a[1].trim();
            "世界空间结构" !== e &&
              "Cấu trúc không gian thế giới" !== e &&
              t.add(e);
          }
          const r = e.match(/^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*([^-]+)$/i);
          if (r) {
            const e = $a(r[1].trim());
            n.add(e.mainCharacterName);
          }
          const s = e.match(
            /^(?:\[角色\]|\[Nhân\s*[vV]ật\])\s*(.+?)\s*-\s*(陌生期|好感期|心动期|确认期|深爱期|Kỳ Xa Lạ|Kỳ Hảo Cảm|Kỳ Rung Động|Kỳ Tâm Động|Kỳ Rung Tâm|Kỳ Xác Nhận|Kỳ Thâm Ái)$/i,
          );
          if (s) {
            const e = $a(s[1].trim());
            n.add(e.mainCharacterName);
          }
        }),
          t.size > 0 && (la = new Set(t)),
          za(ca, [...t], ea.map_sticky_cycles),
          za(da, [...n], ea.character_sticky_cycles));
      })(l));
    const m = [...d]
      .filter((e) => e.score > 0 || "" !== e.forced)
      .sort((e, t) => t.score - e.score)
      .slice(0, 16);
    if (s > 0 || o > 0) {
      const t = `${"enable" === e ? "Chuẩn bị AI phản hồi" : "AI phản hồi hoàn tất"}: Bật ${s} mục, Tắt ${o} mục`;
      (console.info(`[Cập nhật Thế giới] ${t}`),
        Zn.DEBUG && aa() && toastr.info(t, "Cập nhật Thế giới"));
    } else
      Zn.DEBUG &&
        console.log(
          `[Cập nhật Thế giới] Lần này không cần cập nhật trạng thái mục [chế độ ${e}]`,
        );
    return Ge({
      processing: !1,
      pendingReason: "",
      queuedReason: qa?.reason ?? "",
      worldbookName: r,
      lastReason: n.reason,
      lastMode: e,
      lastUpdatedAt: Date.now(),
      lastMessage: `已完成 ${n.reason}，共处理 ${i} 个条目`,
      lastError: "",
      settings: ta(),
      context: xa(t, a),
      summary: {
        enabledCount: s,
        disabledCount: o,
        totalProcessed: i,
        activeEntries: l,
        changedEntries: c,
        decisionTraces: d,
        topScoredEntries: m,
      },
    });
  } catch (t) {
    return (
      (t instanceof Error && t.message.includes("MVU")) ||
      (t instanceof Error && t.message.includes("初始化"))
        ? Zn.DEBUG &&
          console.log(
            "[Cập nhật Thế giới] Lỗi liên quan đến MVU, có thể là đang khởi tạo, bỏ qua",
          )
        : (console.error("[Cập nhật Thế giới] Cập nhật thất bại", t),
          Zn.DEBUG &&
            aa() &&
            toastr.error(
              `Cập nhật thất bại: ${t instanceof Error ? t.message : "Lỗi chưa biết"}`,
              "Cập nhật Thế giới",
            )),
      Ge({
        processing: !1,
        pendingReason: "",
        queuedReason: qa?.reason ?? "",
        lastReason: n.reason,
        lastMode: e,
        lastUpdatedAt: Date.now(),
        lastMessage: `执行 ${n.reason} 失败`,
        lastError: t instanceof Error ? t.message : "未知错误",
      })
    );
  } finally {
    Wa = !1;
    const e = qa;
    ((qa = null),
      Ge({ processing: !1, pendingReason: "", queuedReason: e?.reason ?? "" }),
      e &&
        (Zn.DEBUG &&
          console.log(
            `[Cập nhật Thế giới] Thực thi cập nhật trong hàng đợi: ${e.reason}`,
          ),
        func_nr(e.mode, e)));
  }
}
((Ue = {
  manualRefresh: async (e) => (
    await func_nr(e, {
      force: !0,
      reason: `PANEL_MANUAL_${e.toUpperCase()}`,
      allowWhenDisabled: !0,
    }),
    Oe()
  ),
  refreshSnapshot: async () => (
    await (async function (e = "PANEL_REFRESH_CONTEXT") {
      const t = await func_tr();
      if (!t)
        return Ge({
          lastReason: e,
          lastUpdatedAt: Date.now(),
          lastMessage:
            "Ngữ cảnh chưa sẵn sàng, tạm thời không thể tạo ảnh chụp nhanh trạng thái chạy",
          context: null,
        });
      const n = Ca(t);
      return Ge({
        lastReason: e,
        lastUpdatedAt: Date.now(),
        lastMessage: "Đã đồng bộ ảnh chụp nhanh ngữ cảnh mới nhất",
        context: xa(t, n),
      });
    })(),
    Oe()
  ),
  runDiagnostics: async () => (
    await (async function (e = "PANEL_RUN_DIAGNOSTICS") {
      try {
        const t = await func_tr(),
          n = Ga();
        if (!n)
          return Ge({
            lastReason: e,
            lastUpdatedAt: Date.now(),
            lastMessage:
              "Thẻ nhân vật hiện tại chưa liên kết với Thế giới thư chính, không thể thực hiện kiểm tra",
            lastError:
              "Thẻ nhân vật hiện tại chưa liên kết với Thế giới thư chính",
            diagnostics: null,
          });
        const a = Pa(await La(n), t),
          r = t ? Ca(t) : { domainName: "", factionName: "" };
        return Ge({
          worldbookName: n,
          lastReason: e,
          lastUpdatedAt: Date.now(),
          lastMessage: `Đã hoàn thành kiểm tra Thế giới thư, quét ${a.totalEntries} mục được bật`,
          lastError: "",
          settings: ta(),
          context: t ? xa(t, r) : null,
          diagnostics: a,
        });
      } catch (t) {
        return Ge({
          lastReason: e,
          lastUpdatedAt: Date.now(),
          lastMessage: "Kiểm tra Thế giới thư thất bại",
          lastError: t instanceof Error ? t.message : "未知错误",
        });
      }
    })(),
    Oe()
  ),
  runPreview: async (e) => (
    await (async function (e, t = "PANEL_RUN_PREVIEW") {
      try {
        const n = await Ha(e),
          a = Ca(n.context);
        return Ge({
          worldbookName: n.worldbookName,
          lastReason: t,
          lastUpdatedAt: Date.now(),
          lastMessage: `Đã hoàn thành xem trước sa bàn, trúng ${n.matchedEntries.length} mục`,
          lastError: "",
          settings: ta(),
          context: xa(n.context, a),
          preview: {
            checkedAt: Date.now(),
            input: {
              currentRegion: n.context.currentRegion,
              currentLayer: n.context.currentLayer,
              environmentDesc: n.context.environmentDesc,
              recentMessages: n.context.recentMessages,
            },
            matchedEntries: n.matchedEntries,
            topScoredEntries: n.topScoredEntries,
          },
        });
      } catch (e) {
        return Ge({
          lastReason: t,
          lastUpdatedAt: Date.now(),
          lastMessage: "Xem trước sa bàn thất bại",
          lastError: e instanceof Error ? e.message : "未知错误",
        });
      }
    })(e),
    Oe()
  ),
}),
  $(() => {
    (Jn(),
      Ge({
        bootStatus: "initializing",
        lastMessage:
          "Bảng mở rộng đã được gắn kết, chuẩn bị khởi tạo công cụ Cập nhật Thế giới",
        settings: ta(),
      }),
      errorCatched(async () => {
        (console.info("[Cập nhật Thế giới] Kịch bản đã được tải"),
          console.info(
            "[Cập nhật Thế giới] Chiến lược hiện tại: Tối ưu mặc định",
          ));
        const e = await func_er();
        (e
          ? (console.info("[Cập nhật Thế giới] Khung MVU đã khởi tạo"),
            Ge({
              bootStatus: "ready",
              lastMessage:
                "Khung MVU đã khởi tạo, đang thực hiện bật đèn ban đầu",
            }),
            await Xa(1500),
            await func_nr("enable", { force: !0, reason: "INITIAL_BOOTSTRAP" }),
            console.info("[Cập nhật Thế giới] Khởi tạo kiểm tra hoàn thành"))
          : (console.warn(
              "[Cập nhật Thế giới] Khởi tạo MVU quá giờ, sẽ thử lại trong các sự kiện sau",
            ),
            Ge({
              bootStatus: "waiting_mvu",
              lastMessage:
                "Khởi tạo MVU quá giờ, đợi sự kiện sau bổ sung ngữ cảnh",
            })),
          eventMakeFirst(tavern_events.MESSAGE_SENT, async (e) => {
            ((Qa = await (async function (e, t = 4, n = 25) {
              for (let a = 0; a <= t; a++) {
                const r = getChatMessages(e, { role: "user" })[0],
                  s = Ja(r?.message || "");
                if (s) return s;
                a < t && (await Xa(n));
              }
              return Ka();
            })(e)),
              Zn.DEBUG &&
                console.log(
                  "[Cập nhật Thế giới] 🟢 Người dùng gửi tin nhắn, bật các mục Thế giới thư liên quan",
                  { message_id: e, latestInput: Qa },
                ),
              await Za(),
              await func_nr("enable", {
                force: !0,
                reason: "MESSAGE_SENT",
                latestMessageHint: Qa,
              }));
          }),
          eventMakeFirst(
            tavern_events.GENERATE_BEFORE_COMBINE_PROMPTS,
            async () => {
              const e = Qa || Ka();
              (Zn.DEBUG &&
                console.log(
                  "[Cập nhật Thế giới] 🚦 Kiểm tra cuối cùng trước khi tạo, cưỡng chế làm mới các mục Thế giới thư cần bật",
                  { latestInput: e },
                ),
                await Za(),
                await func_nr("enable", {
                  force: !0,
                  reason: "GENERATE_BEFORE_COMBINE_PROMPTS",
                  latestMessageHint: e,
                }));
            },
          ),
          eventOn(tavern_events.MESSAGE_SWIPED, async (e) => {
            (Zn.DEBUG &&
              console.log(
                `[Cập nhật Thế giới] 🔄 Tin nhắn #${e} roll lại, bật các mục Thế giới thư liên quan`,
              ),
              await Xa(300),
              await func_nr("enable", { force: !0, reason: "MESSAGE_SWIPED" }));
          }),
          eventOn(tavern_events.MESSAGE_RECEIVED, async () => {
            (Zn.DEBUG &&
              console.log(
                "[Cập nhật Thế giới] 🔴 AI phản hồi hoàn tất, tắt các mục Thế giới thư không cốt lõi",
              ),
              (Qa = ""),
              await Xa(200),
              await func_nr("disable", { reason: "MESSAGE_RECEIVED" }));
          }),
          eventOn(tavern_events.MESSAGE_DELETED, async (e) => {
            (Zn.DEBUG &&
              console.log(
                `[Cập nhật Thế giới] 🗑️ Tin nhắn #${e} bị xóa, đánh giá lại các mục Thế giới thư`,
              ),
              (Qa = ""),
              await Xa(100),
              await func_nr("enable", { reason: "MESSAGE_DELETED" }));
          }),
          eventOn(tavern_events.MESSAGE_EDITED, async (e) => {
            (Zn.DEBUG &&
              console.log(
                `[Cập nhật Thế giới] ✏️ Tin nhắn #${e} bị sửa, đánh giá lại các mục Thế giới thư`,
              ),
              (Qa = ""),
              await Xa(100),
              await func_nr("enable", { reason: "MESSAGE_EDITED" }));
          }),
          eventOn(tavern_events.CHAT_CHANGED, async () => {
            (Zn.DEBUG &&
              console.log(
                "[Cập nhật Thế giới] Kích hoạt sự kiện: CHAT_CHANGED",
              ),
              (Qa = ""),
              await Xa(2e3),
              await func_nr("enable", { reason: "CHAT_CHANGED" }));
          }),
          eventOn(tavern_events.CHAT_CREATED, async () => {
            (Zn.DEBUG &&
              console.log(
                "[Cập nhật Thế giới] Kích hoạt sự kiện: CHAT_CREATED",
              ),
              (Qa = ""),
              await Xa(2e3),
              await func_nr("enable", { reason: "CHAT_CREATED" }));
          }),
          eventOn(tavern_events.CHARACTER_PAGE_LOADED, async () => {
            (Zn.DEBUG &&
              console.log(
                "[Cập nhật Thế giới] Kích hoạt sự kiện: CHARACTER_PAGE_LOADED",
              ),
              (Qa = ""),
              await Xa(2e3),
              await func_nr("enable", { reason: "CHARACTER_PAGE_LOADED" }));
          }),
          e &&
            eventOn(Mvu.events.VARIABLE_UPDATE_ENDED, async () => {
              (Zn.DEBUG &&
                console.log(
                  "[Cập nhật Thế giới] Kích hoạt sự kiện: VARIABLE_UPDATE_ENDED",
                ),
                await Xa(100),
                await func_nr("enable", { reason: "VARIABLE_UPDATE_ENDED" }));
            }));
        const t = "Chế độ tối ưu mặc định";
        (console.info(
          `[Cập nhật Thế giới] Bộ lắng nghe đã thiết lập, chiến lược: ${t}`,
        ),
          e && aa()
            ? toastr.success(
                `Cập nhật Thế giới đã bật - ${t}`,
                "Đăng Hỏa Lan San",
              )
            : aa() &&
              toastr.info(
                "Cập nhật Thế giới đã tải, đang đợi MVU khởi tạo...",
                "Đăng Hỏa Lan San",
              ));
      })());
  }),
  $(window).on("pagehide", () => {
    Kn();
  }));
//# sourceMappingURL=index.js.map

})();
