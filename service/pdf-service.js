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

const stl_34 = _ => {
    return {
        "characterSpacing": px(-0.0584),
        "wordSpacing ": px(-0.0584),
    }
}

const stl_39 = _ => px(0.600167)

const stl_40 = _ => {
    return {
        "characterSpacing": px(0.0833),
        "wordSpacing ": px(0.0833),
    }
}
const stl_41 = _ => px(0.600167)

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

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`账号: `, px(2.6251), px(5.342), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`7559461998104011`, px(2.6251) + px(3), px(5.342), Object.assign({}, stl_20()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_21())
        .fillColor('#000000')
        .text(`A/CNo.`, px(2.6251), px(6.4042), Object.assign({}, stl_22()))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`货币:人民币`, px(40), px(5.342), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_21())
        .fillColor('#000000')
        .text(`Currency`, px(40), px(6.4042), Object.assign({}, stl_34()))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`账户名称:南京集云企业管理发展合伙企业（有限合伙）`, px(2.6251), px(6.9425), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_21())
        .fillColor('#000000')
        .text(`Account Name`, px(2.6251), px(8.0047), Object.assign({}, stl_22()))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`上页余额:`, px(39.1853), px(6.9425), Object.assign({}, stl_18()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_17())
        .fillColor('#000000')
        .text(`1,082,508.02`, px(39.1853) + px(5), px(6.9425), Object.assign({}, stl_20()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_21())
        .fillColor('#000000')
        .text(`Last balance`, px(39.4854), px(8.0047), Object.assign({}, stl_22()))

    doc.path('M 33, ' + (px(8.0047) + px(0.8)) + ' L 590, ' + (px(8.0047) + px(0.8)) + ' L 590,' + (px(8.0047) + px(0.8) - 0.01) + ' L 33,' + (px(8.0047) + px(0.8) - 0.01) + '')
        .fillAndStroke('black', 'black')
        .stroke()

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`日期`, px(3.5503), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('Date', px(3.7754), px(9.80), Object.assign({}))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`业务类型`, px(7.2764), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('Business Type', px(7.1763), px(9.80), Object.assign({}))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`票据号`, px(11.8526), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('Bill No.', px(12.0527), px(9.80), Object.assign({}))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`摘要`, px(18.9546), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('Description', px(18.4795), px(9.80), Object.assign({}))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`借方/贷方金额`, px(28.1572), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('Debit/CreditAmount', px(27.9821), px(9.80), Object.assign({}))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`余额`, px(35.6093), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('Balancet', px(35.2842), px(9.80), Object.assign({}))

    doc.font(`${__dirname}/simsun.ttf`)
        .fontSize(stl_39())
        .fillColor('#000000')
        .text(`对手户名`, px(40.7357), px(9.3), Object.assign({}, stl_40()))

    doc.font(`${__dirname}/times.ttf`)
        .fontSize(stl_41())
        .fillColor('#000000')
        .text('CounterpartyAccountName', px(39.1853), px(9.80), Object.assign({}))

    doc.end();
}

module.exports = {buildPDF};
