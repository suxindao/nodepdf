const Parser = require('json2csv').Parser;

const downloadResource = (res, fileName, fields, data) => {

    const json2csv = new Parser({ fields });
    const csv = json2csv.parse(data);
    // iconv-lite: Pure JS character encoding conversion 转码，防止中文乱码
    const iconv = require('iconv-lite');
    const newCsv = iconv.encode(csv, 'gbk')

    res.header('Content-Type', 'text/csv');
    res.attachment(fileName);
    return res.send(newCsv);
}

module.exports = {
    downloadResource,
}