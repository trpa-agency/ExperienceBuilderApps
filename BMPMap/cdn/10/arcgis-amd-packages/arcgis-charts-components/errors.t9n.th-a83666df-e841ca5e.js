/*! For license information please see errors.t9n.th-a83666df-e841ca5e.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const t="เกิดข้อผิดพลาดขึ้นขณะโหลดแผนภูมิ",i="มีทั้งหมด ${ elementCount } แท่งในแผนภูมินี้ แผนภูมิแท่งที่มีหนึ่งซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",a="แผนภูมิแท่งที่มีสองซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",n="แผนภูมิแท่งที่มีอย่างน้อยสามซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",o="แผนภูมิแท่งจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ เลือกแบ่งตามฟิลด์ด้วยค่าที่ไม่ซ้ำกันจำนวนน้อยลง",r="เกิดข้อผิดพลาดขึ้นขณะสร้างแผนภูมิ",s="ไม่สามารถใช้การแปลงค่า log กับค่าติดลบหรือศูนย์ได้",m="ไม่สามารถใช้การแปลงรากที่สองกับค่าติดลบได้",u="เกิดข้อผิดพลาดขึ้นขณะโหลดชั้นข้อมูล URL = ${ url } ID รายการพอร์ทัล = ${ portalItemId }",C="${ dataPath } ต้องไม่ซ้ำกัน ซีรีส์ที่ชื่อ ${ seriesName } มี ID (${ seriesID }) ที่ซีรีส์อื่นใช้งานอยู่แล้ว",d="${ dataPath } ไม่สามารถดำเนินการรวมแบบไม่นับกับฟิลด์ที่ไม่ใช่ตัวเลขได้",l="${ dataPath } ไม่มีชื่อคุณสมบัติ ${ missingProperty }",L="${ dataPath } ต้องมีความยาวมากกว่า ${ limit } อักขระ",$="${ dataPath } ต้องมีไม่น้อยกว่า ${ limit } รายการ",c="${ dataPath } ต้องมีไม่เกิน ${ limit } รายการ",x="${ dataPath } ต้องมีอย่างน้อยหนึ่งอักขระที่ไม่ใช่ไวท์สเปซ",E="${ dataPath } ต้องไม่มี ${ additionalProperty }",S="${ dataPath } ต้องเท่ากับหนึ่งในค่าที่อนุญาตเหล่านี้: ${ allowedValues }",g="${ dataPath } ต้องตรงกับรูปแบบของหนึ่งในรายการเหล่านี้: ${ schemaOptions }",h="ไม่รองรับพล็อตการกระจายที่มีสัญลักษณ์ตามสัดส่วน ใช้ขนาดสัญลักษณ์เริ่มต้นแล้ว",y="ไม่สามารถอ่านข้อมูลขาเข้า",P="ฮิสโตแกรมต้องการอย่างน้อยสองค่าตัวเลข",p="ประเภทซีรีส์ที่คาดหวังที่ดัชนี ${ seriesIndex } คือ '${ expectedType }' แต่ได้รับ '${ receivedType }' แทน",I="หรือ",v="ตรวจสอบให้แน่ใจว่าผลรวมทั้งหมดของฟิลด์ตัวเลขที่เลือก ส่งคืนค่าบวกทั้งหมดหรือค่าลบทั้งหมด",f="มีทั้งหมด ${ sliceCount } สไลซ์ในแผนภูมินี้ แผนภูมิวงกลมจะถูกจำกัดไว้ที่ ${ totalLimit } สไลซ์ เลือกฟิลด์ หมวดหมู่ ที่มีค่าที่ไม่ซ้ำกันในจำนวนที่น้อยลง เพิ่มฟิลด์ตัวเลขที่น้อยลง หรือใช้ตัวกรองกับข้อมูลของคุณ",b="เกจแบบอิงฟีเจอร์จะถูกจำกัดไว้ที่ ${ totalLimit } ฟีเจอร์ กรองข้อมูลของคุณ",q="มีทั้งหมด ${ elementCount } มาร์คเกอร์ในแผนภูมินี้ แผนภูมิเส้นที่มีหนึ่งซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } มาร์คเกอร์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",B="แผนภูมิเส้นที่มีสองซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } มาร์คเกอร์ หรือ ${ seriesLimit } มาร์คเกอร์ต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",V="แผนภูมิเส้นที่มีอย่างน้อยสามซีรีส์ขึ้นไป จะถูกจำกัดไว้ที่ ${ totalLimit } มาร์คเกอร์ หรือ ${ seriesLimit } มาร์คเกอร์ต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",w="แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ เลือกแบ่งตามฟิลด์ด้วยค่าที่ไม่ซ้ำกันจำนวนน้อยลง",D="มีทั้งหมด ${ elementCount } กล่องในแผนภูมินี้ พล็อตแบบกล่องที่มีหนึ่งซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } กล่อง เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",F="พล็อตแบบกล่องที่มีสองซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } กล่อง หรือ ${ seriesLimit } กล่องต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",T="พล็อตแบบกล่องที่มีอย่างน้อยสามซีรีส์ขึ้นไปจะถูกจำกัดไว้ที่ ${ totalLimit } กล่อง หรือ ${ seriesLimit } กล่องต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",O="พล็อตแบบกล่องจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ เลือกแบ่งตามฟิลด์ด้วยค่าที่ไม่ซ้ำกันจำนวนน้อยลง",N="พล็อตแบบกล่องจะสามารถแสดงผลได้สูงสุด ${ totalLimit } จุดค่าผิดปกติ กรองข้อมูลของคุณ";var A={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:u,duplicateSeriesID:C,nonNumericAggregation:d,requiredProperty:l,minLength:L,minItems:$,maxItems:c,whiteSpacePattern:x,additionalProperty:E,enumValues:S,anyOfValues:g,bubbleChartValidateMsg:h,queryError:y,histogramEmptyField:P,invalidSeriesType:p,or:I,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:v,pieChartSlicesCannotExceedLimit:f,gaugeCannotExceedLimit:b,uniqueSeriesLineCountCannotExceedLimit:q,twoSeriesLineCountCannotExceedLimit:B,threePlusSeriesLineCountCannotExceedLimit:V,lineSeriesCountCannotExceedLimit:w,uniqueSeriesBoxCountCannotExceedLimit:D,twoSeriesBoxCountCannotExceedLimit:F,threePlusBoxLineCountCannotExceedLimit:T,boxSeriesCountCannotExceedLimit:O,boxSeriesOutlierCannotExceedLimit:N};e.additionalProperty=E,e.anyOfValues=g,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=O,e.boxSeriesOutlierCannotExceedLimit=N,e.bubbleChartValidateMsg=h,e.default=A,e.defaultError=t,e.defaultInvalidChart=r,e.duplicateSeriesID=C,e.enumValues=S,e.gaugeCannotExceedLimit=b,e.histogramEmptyField=P,e.invalidSeriesType=p,e.layerLoadFailure=u,e.lineSeriesCountCannotExceedLimit=w,e.maxItems=c,e.minItems=$,e.minLength=L,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=m,e.nonNumericAggregation=d,e.or=I,e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=v,e.pieChartSlicesCannotExceedLimit=f,e.queryError=y,e.requiredProperty=l,e.threePlusBoxLineCountCannotExceedLimit=T,e.threePlusSeriesBarCountCannotExceedLimit=n,e.threePlusSeriesLineCountCannotExceedLimit=V,e.twoSeriesBarCountCannotExceedLimit=a,e.twoSeriesBoxCountCannotExceedLimit=F,e.twoSeriesLineCountCannotExceedLimit=B,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=D,e.uniqueSeriesLineCountCannotExceedLimit=q,e.whiteSpacePattern=x}));