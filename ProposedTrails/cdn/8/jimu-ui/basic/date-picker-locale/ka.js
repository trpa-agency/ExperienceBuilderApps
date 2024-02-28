System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>m});var n={lessThanXSeconds:{past:"{{count}} წამზე ნაკლები ხნის წინ",present:"{{count}} წამზე ნაკლები",future:"{{count}} წამზე ნაკლებში"},xSeconds:{past:"{{count}} წამის წინ",present:"{{count}} წამი",future:"{{count}} წამში"},halfAMinute:{past:"ნახევარი წუთის წინ",present:"ნახევარი წუთი",future:"ნახევარი წუთში"},lessThanXMinutes:{past:"{{count}} წუთზე ნაკლები ხნის წინ",present:"{{count}} წუთზე ნაკლები",future:"{{count}} წუთზე ნაკლებში"},xMinutes:{past:"{{count}} წუთის წინ",present:"{{count}} წუთი",future:"{{count}} წუთში"},aboutXHours:{past:"დაახლოებით {{count}} საათის წინ",present:"დაახლოებით {{count}} საათი",future:"დაახლოებით {{count}} საათში"},xHours:{past:"{{count}} საათის წინ",present:"{{count}} საათი",future:"{{count}} საათში"},xDays:{past:"{{count}} დღის წინ",present:"{{count}} დღე",future:"{{count}} დღეში"},aboutXWeeks:{past:"დაახლოებით {{count}} კვირას წინ",present:"დაახლოებით {{count}} კვირა",future:"დაახლოებით {{count}} კვირაში"},xWeeks:{past:"{{count}} კვირას კვირა",present:"{{count}} კვირა",future:"{{count}} კვირაში"},aboutXMonths:{past:"დაახლოებით {{count}} თვის წინ",present:"დაახლოებით {{count}} თვე",future:"დაახლოებით {{count}} თვეში"},xMonths:{past:"{{count}} თვის წინ",present:"{{count}} თვე",future:"{{count}} თვეში"},aboutXYears:{past:"დაახლოებით {{count}} წლის წინ",present:"დაახლოებით {{count}} წელი",future:"დაახლოებით {{count}} წელში"},xYears:{past:"{{count}} წლის წინ",present:"{{count}} წელი",future:"{{count}} წელში"},overXYears:{past:"{{count}} წელზე მეტი ხნის წინ",present:"{{count}} წელზე მეტი",future:"{{count}} წელზე მეტი ხნის შემდეგ"},almostXYears:{past:"თითქმის {{count}} წლის წინ",present:"თითქმის {{count}} წელი",future:"თითქმის {{count}} წელში"}};function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}const r={date:a({formats:{full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} {{time}}'-ზე'",long:"{{date}} {{time}}'-ზე'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var i={lastWeek:"'წინა' eeee LT'-ზე'",yesterday:"'გუშინ' LT'-ზე'",today:"'დღეს' LT'-ზე'",tomorrow:"'ხვალ' LT'-ზე'",nextWeek:"'შემდეგი' eeee LT'-ზე'",other:"L"};function u(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,u=r.width?String(r.width):i;a=t.formattingValues[u]||t.formattingValues[i]}else{var o=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;a=t.values[d]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}const o={ordinalNumber:function(t,e){var n=Number(t);return 1===n?n+"-ლი":n+"-ე"},era:u({values:{narrow:["ჩ.წ-მდე","ჩ.წ"],abbreviated:["ჩვ.წ-მდე","ჩვ.წ"],wide:["ჩვენს წელთაღრიცხვამდე","ჩვენი წელთაღრიცხვით"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["1-ლი კვ","2-ე კვ","3-ე კვ","4-ე კვ"],wide:["1-ლი კვარტალი","2-ე კვარტალი","3-ე კვარტალი","4-ე კვარტალი"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:u({values:{narrow:["ია","თე","მა","აპ","მს","ვნ","ვლ","აგ","სე","ოქ","ნო","დე"],abbreviated:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],wide:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},defaultWidth:"wide"}),day:u({values:{narrow:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],short:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],abbreviated:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],wide:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"}},defaultFormattingWidth:"wide"})};function d(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var u,o=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?l(d,(function(t){return t.test(o)})):s(d,(function(t){return t.test(o)}));u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;var f=e.slice(o.length);return{value:u,rest:f}}}function s(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function l(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var c,f={ordinalNumber:(c={matchPattern:/^(\d+)(-ლი|-ე)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(c.matchPattern);if(!n)return null;var a=n[0],r=t.match(c.parsePattern);if(!r)return null;var i=c.valueCallback?c.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var u=t.slice(a.length);return{value:i,rest:u}}),era:d({matchPatterns:{narrow:/^(ჩვ?\.წ)/i,abbreviated:/^(ჩვ?\.წ)/i,wide:/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i,/^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-(ლი|ე)? კვ/i,wide:/^[1234]-(ლი|ე)? კვარტალი/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{any:/^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ია/i,/^თ/i,/^მარ/i,/^აპ/i,/^მაი/i,/^ი?ვნ/i,/^ი?ვლ/i,/^აგ/i,/^ს/i,/^ო/i,/^ნ/i,/^დ/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,short:/^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,long:/^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^კვ/i,/^ორ/i,/^სა/i,/^ოთ/i,/^ხუ/i,/^პა/i,/^შა/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{any:/^([ap]\.?\s?m\.?|შუაღ|დილ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^შუაღ/i,noon:/^შუადღ/i,morning:/^დილ/i,afternoon:/ნაშუადღევს/i,evening:/საღამო/i,night:/ღამ/i}},defaultParseWidth:"any"})};const m={code:"ka",formatDistance:function(t,e,a){return a=a||{},"string"==typeof n[t]?n[t]:a.addSuffix&&a.comparison>0?n[t].future.replace("{{count}}",e):a.addSuffix&&a.comparison<=0?n[t].past.replace("{{count}}",e):n[t].present.replace("{{count}}",e)},formatLong:r,formatRelative:function(t,e,n,a){return i[t]},localize:o,match:f,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));