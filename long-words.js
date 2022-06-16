const longWords=array=>array.every(str=>str.length>=5)

const oneLongWord=array=>array.some(str=>str.length>=10)

const noLongWords=array=>array.every(str=>str.length<7)