/*! For license information please see errors.t9n.zh-TW-12d88496-a53fbda3-f49d5621.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const t="載入圖表時出錯。",i="此圖表總計有 ${ elementCount } 軸。 含有一個數列的長條圖限於 ${ totalLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",a="含有兩個數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",n="含有三個或更多數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",o="長條圖限為 ${ seriesLimit } 個數列。 選擇唯一值較少的分割依據欄位",r="建立圖表時發生錯誤。",s="無法將對數轉換套用於負值或零值。",m="無法將平方根轉換套用於負值。",u="載入圖層時出錯。 URL = ${ url }。 入口網站項目 ID = ${ portalItemId }。",d="${ dataPath } 必須唯一。 名為 ${ seriesName } 的數列具有其他數列已在使用的 ID (${ seriesID })。",l="${ dataPath } 無法在非數值欄位上執行非計數匯聚。",C="${ dataPath } 缺少名為 ${ missingProperty } 的屬性。",L="${ dataPath } 不應短於 ${ limit } 個字元。",$="${ dataPath } 的項目數不應少於 ${ limit } 個。",c="${ dataPath } 的項目數不應多於 ${ limit } 個。",x="${ dataPath } 至少必須有一個非空白字元。",E="${ dataPath } 不能有 ${ additionalProperty }。",S="${ dataPath } 必須等於下列其中一個允許值: ${ allowedValues }。",h="${ dataPath } 必須符合下列其中一項結構描述: ${ schemaOptions }。",P="不支援包含比例符號的散點圖。 已套用預設符號大小。",g="無法讀取輸入資料。",p="直方圖至少需要兩個數值。",y="索引 ${ seriesIndex } 上預期的數列類型為 '${ expectedType }'，但改為接收 '${ receivedType }'",I="確保所選數值欄位的總和全部傳回正值或全部傳回負值。",v="此圖表總計有 ${ sliceCount } 個切片。 圓餅圖限制為 ${ totalLimit } 個切片。 選擇具有較少唯一值的「類別」欄位、新增較少的「數值」欄位，或將篩選器套用至您的資料。",f="圖徵型儀錶限於 ${ totalLimit } 個圖徵。 篩選您的資料。",b="此圖表總計有 ${ elementCount } 個標記。 含有一個數列的折線圖限於 ${ totalLimit } 個標記。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",q="含有兩個數列的折線圖限於 ${ totalLimit } 個標記或每個數列 ${ seriesLimit } 個標記。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",B="含有兩個或三個數列的折線圖限於 ${ totalLimit } 個標記或每個數列 ${ seriesLimit } 個標記。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",V="折線圖限為 ${ seriesLimit } 個數列。 選擇唯一值較少的分割依據欄位",w="此圖表總計有 ${ elementCount } 個方塊。 含有一個數列的盒狀圖限於 ${ totalLimit } 個方塊。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",D="含有兩個數列的盒狀圖限於 ${ totalLimit } 個方塊或每個數列 ${ seriesLimit } 個方塊。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",F="含有三個或更多數列的盒狀圖限於 ${ totalLimit } 個方塊或每個數列 ${ seriesLimit } 個方塊。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",T="盒狀圖限於 ${ seriesLimit } 個數列。 選擇唯一值較少的分割依據欄位",O="盒狀圖最多只能顯示 ${ totalLimit } 個異常值點。 篩選您的資料。";var N={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:u,duplicateSeriesID:d,nonNumericAggregation:l,requiredProperty:C,minLength:L,minItems:$,maxItems:c,whiteSpacePattern:x,additionalProperty:E,enumValues:S,anyOfValues:h,bubbleChartValidateMsg:P,queryError:g,histogramEmptyField:p,invalidSeriesType:y,or:"或",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:I,pieChartSlicesCannotExceedLimit:v,gaugeCannotExceedLimit:f,uniqueSeriesLineCountCannotExceedLimit:b,twoSeriesLineCountCannotExceedLimit:q,threePlusSeriesLineCountCannotExceedLimit:B,lineSeriesCountCannotExceedLimit:V,uniqueSeriesBoxCountCannotExceedLimit:w,twoSeriesBoxCountCannotExceedLimit:D,threePlusBoxLineCountCannotExceedLimit:F,boxSeriesCountCannotExceedLimit:T,boxSeriesOutlierCannotExceedLimit:O};e.additionalProperty=E,e.anyOfValues=h,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=T,e.boxSeriesOutlierCannotExceedLimit=O,e.bubbleChartValidateMsg=P,e.default=N,e.defaultError=t,e.defaultInvalidChart=r,e.duplicateSeriesID=d,e.enumValues=S,e.gaugeCannotExceedLimit=f,e.histogramEmptyField=p,e.invalidSeriesType=y,e.layerLoadFailure=u,e.lineSeriesCountCannotExceedLimit=V,e.maxItems=c,e.minItems=$,e.minLength=L,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=m,e.nonNumericAggregation=l,e.or="或",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=I,e.pieChartSlicesCannotExceedLimit=v,e.queryError=g,e.requiredProperty=C,e.threePlusBoxLineCountCannotExceedLimit=F,e.threePlusSeriesBarCountCannotExceedLimit=n,e.threePlusSeriesLineCountCannotExceedLimit=B,e.twoSeriesBarCountCannotExceedLimit=a,e.twoSeriesBoxCountCannotExceedLimit=D,e.twoSeriesLineCountCannotExceedLimit=q,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=w,e.uniqueSeriesLineCountCannotExceedLimit=b,e.whiteSpacePattern=x}));