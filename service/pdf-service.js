const PDFDocument = require('pdfkit');

const px = em => em * 13
const wordSpacing = _ => {
    return {
        "wordSpacing": px(_)
    }
}
const stl_13 = _ => {
    return {
        "characterSpacing": px(-0.0408),
        "indent": px(-0.0408)
    }
}

const stl_17 = _ => px(0.800223)

const stl_18 = _ => {
    return {
        "characterSpacing": 0,
        "wordSpacing ": 0,
    }
}

const stl_20 = _ => {
    return {
        "characterSpacing": px(-0.0306),
        "wordSpacing ": px(-0.0306),
    }
}

const stl_21 = _ => px(0.600167)

const stl_22 = _ => {
    return {
        "characterSpacing": px(-0.0347),
        "wordSpacing ": px(-0.0347),
    }
}

const stl_28 = _ => {
    return {
        "characterSpacing": px(-0.0445),
        "wordSpacing ": px(-0.0445),
    }
}

function buildPDF(dataCallback, endCallback) {

    const doc = new PDFDocument({
        autoFirstPage: false,
        bufferPages: true,
        font: 'Courier',
        size: 'A4'
    });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc.addPage({
        margins: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        }
    })

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(px(1.10))
        .fillColor('#FF0000')
        .text(`账务明细清单`, px(21.3053), px(1.2696), Object.assign({}, stl_13()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(px(0.9))
        .fillColor('#000000')
        .text(`Statement Of Account`, px(21.4053), px(2.5319), Object.assign({}, wordSpacing(0.0408), stl_13()))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`开户银行:`, px(2.6251), px(3.4415), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`南京分行郁金香路支行`, px(2.6251) + px(4), px(3.4415), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`账单所属期间: `, px(34), px(3.4415), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`20220501 20220531`, px(34) + px(5.1), px(3.4415), Object.assign({}, stl_20()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_21())
        .fillColor('#000000')
        .text(`A/COpeningBank`, px(2.6251), px(4.5037), Object.assign({}, stl_22()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_21())
        .fillColor('#000000')
        .text(`Statement CoveredPeriod`, px(34.484), px(4.5037), Object.assign({}, stl_28()))

    doc.path('M 33,68 L 590,68 L 590,67.9 L 33,67.9')
        .fillAndStroke('red', 'red')
        .stroke()

    doc.end();
}

module.exports = {buildPDF};
