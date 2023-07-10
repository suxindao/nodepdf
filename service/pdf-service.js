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

const stl_35 = _ => {
    return {
        "characterSpacing": px(-0.035),
        "wordSpacing ": px(-0.035),
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

const stl_62 = _ => px(0.450126)

const stl_63 = _ => {
    return {
        "characterSpacing": px(-0.0429),
        "wordSpacing ": px(-0.0429),
    }
}

const stl_64 = _ => {
    return {
        "characterSpacing": px(-0.0415),
        "wordSpacing ": px(-0.0415),
    }
}

const stl_66 = _ => {
    return {
        "characterSpacing": px(-0.0452),
        "wordSpacing ": px(-0.0452),
    }
}

const stl_67 = _ => px(0.550153)

const stl_70 = _ => {
    return {
        "characterSpacing": px(-0.0403),
        "wordSpacing ": px(-0.0403),
    }
}

function buildPDF(data, dataCallback, endCallback) {

    const doc = new PDFDocument({
        autoFirstPage: false,
        bufferPages: true,
        font: 'Courier',
        size: 'A4'
    });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    for (let i = 0; i < data.length; i++) {
        let page_data = data[i]

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
            .text(`Statement Of Account`, px(21.2), px(2.5319), Object.assign({}, stl_34()))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`开户银行:南京分行郁金香路支行`, px(2.6251), px(3.4415), Object.assign({}, stl_18()))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`账单所属期间: `, px(34), px(3.4415), Object.assign({}, stl_18()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`${page_data['BillPeriod'][0]} ${page_data['BillPeriod'][1]}`, px(34) + px(5.1), px(3.4415), Object.assign({}, stl_20()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_21())
            .fillColor('#000000')
            .text(`A/C OpeningBank`, px(2.6251), px(4.5037), Object.assign({}, stl_22()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_21())
            .fillColor('#000000')
            .text(`Statement CoveredPeriod`, px(34), px(4.5037), Object.assign({}, stl_28()))

        //第一条线
        doc.lineWidth(0.1)
            // .path('M 33,68 L 590,68 L 590,67.9 L 33,67.9')
            .path('M 33,68 L 590,68')
            .fillAndStroke('red', 'red')
            .stroke()

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`账号:755946199810401`, px(2.6251), px(5.342), Object.assign({}, stl_18()))

        // doc.font(`${__dirname}/times.ttf`)
        //     .fontSize(stl_17())
        //     .fillColor('#000000')
        //     .text(`7559461998104011`, px(2.6251) + px(3), px(5.342), Object.assign({}, stl_20()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_21())
            .fillColor('#000000')
            .text(`A/C No.`, px(2.6251), px(6.4042) - px(0.3), Object.assign({}, stl_22()))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`货币:人民币`, px(42.5862) - px(2.5), px(5.342), Object.assign({}, stl_18()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_21())
            .fillColor('#000000')
            .text(`Currency`, px(42.9363) - px(2.5), px(6.4042) - px(0.3), Object.assign({}, stl_34()))

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
            .text(`上页余额: `, px(39.1853) - px(2.5), px(6.9425), Object.assign({}, stl_18()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`${page_data['BillPeriodBalance']}`, px(39.1853) + px(3.5) - px(2.5), px(6.9425), Object.assign({}, stl_20()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_21())
            .fillColor('#000000')
            .text(`Last balance`, px(39.4854) - px(2.5), px(8.0047), Object.assign({}, stl_22()))

        //第二条线
        doc.lineWidth(0.01)
            .path('M 33, ' + (px(8.0047) + px(0.8)) + ' L 590, ' + (px(8.0047) + px(0.8)) + '')
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
            .text(`借方/贷方金额`, px(28.1572) - px(3), px(9.3), Object.assign({}, stl_40()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_41())
            .fillColor('#000000')
            .text('Debit/CreditAmount', px(27.9821) - px(3), px(9.80), Object.assign({}))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_39())
            .fillColor('#000000')
            .text(`余额`, px(35.6093) - px(3), px(9.3), Object.assign({}, stl_40()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_41())
            .fillColor('#000000')
            .text('Balance', px(35.2842) - px(3), px(9.80), Object.assign({}))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_39())
            .fillColor('#000000')
            .text(`对手户名`, px(40.7357) - px(2.8), px(9.3), Object.assign({}, stl_40()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_41())
            .fillColor('#000000')
            .text('CounterpartyAccountName', px(39.1853) - px(2.8), px(9.80), Object.assign({}))

        //第三条线
        doc.lineWidth(0.1)
            .path('M 33, ' + (px(9.80) + px(1)) + ' L 590, ' + (px(9.80) + px(1)) + '')
            .fillAndStroke('black', 'black')
            .stroke()

        let item_y = px(11.2), add_item = 0

        for (const item of page_data.items) {
            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_21())
                .fillColor('#000000')
                .text(`${item['Date']}`,
                    px(3.2252),
                    item_y + add_item,
                    Object.assign({}, stl_35())
                )

            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_62())
                .fillColor('#000000')
                .text(`${item['BusinessType']}`,
                    px(7.7015),
                    item_y + add_item,
                    Object.assign({}, stl_18())
                )

            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_39())
                .fillColor('#000000')
                .text(`${item['BillNo']}`,
                    px(12),
                    item_y + add_item,
                    Object.assign({}, stl_18())
                )

            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_39())
                .fillColor('#000000')
                .text(`${item['Description']}`,
                    px(17.5292) + px(0.8) - px(4.2),
                    item_y + add_item,
                    Object.assign({
                        width: stl_39() * 20,
                        align: 'center'
                    }, stl_18())
                )

            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_21())
                .fillColor('#000000')
                .text(`${item['DebitCreditAmount']}`,
                    px(30.933) - px(3) - px(2),
                    item_y + add_item,
                    Object.assign({
                        width: stl_21() * 6,
                        align: 'right'
                    }, stl_63())
                )

            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_21())
                .fillColor('#000000')
                .text(`${item['Balance']}`,
                    px(34.3339) - px(3),
                    item_y + add_item,
                    Object.assign({
                        width: stl_21() * 6,
                        align: 'right'
                    }, stl_63()))

            doc.font(`${__dirname}/simsun.ttf`)
                .fontSize(stl_39())
                .fillColor('#000000')
                .text(
                    `${item['CounterpartyAccountName']}`,
                    px(37.5) - px(3),
                    item_y + add_item,
                    Object.assign({
                        width: stl_39() * 18,
                        align: 'center'
                    }, stl_64())
                )

            add_item += px(1.2)
        }

        add_item -= px(1.2) //最后一行不需要再加了

        //第四条线
        doc.lineWidth(0.1)
            // .path('M 33, ' + (px(11) + px(2) + add_item) + ' L 590, ' + (px(11) + px(2) + add_item) + ' L 590,' + (px(11) + px(2) + add_item - 0.01) + ' L 33,' + (px(11) + px(2) + add_item - 0.01) + '')
            .path('M 33, ' + (px(11) + px(2) + add_item) + ' L 590, ' + (px(11) + px(2) + add_item) + '')
            .fillAndStroke('black', 'black')
            .stroke()

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`第${i + 1}页/共${data.length}页 打印时间：${page_data['PrintTime']}`, px(2.6251), px(12.8441) + px(0.2) + add_item, Object.assign({}, stl_18()))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`招商银行股份有限公司`, px(36.9352), px(13.605) + add_item, Object.assign({}, stl_18()))

        //page-footer 页脚
        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_17())
            .fillColor('#000000')
            .text(`特别提示`, px(2.6251), px(14.0564) - px(0.2) + add_item, Object.assign({}, stl_18()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_21())
            .fillColor('#000000')
            .text('Special Notice', px(2.6251) + px(3.5), px(14.0564) - px(0.1) + add_item, Object.assign({}, stl_66()))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_67())
            .fillColor('#000000')
            .text(`若每月5日前未收到对账单，请务必于当月10日前与开户行联系，多谢合作。`, px(3.6253), px(14.6674) + px(0.2) + add_item, Object.assign({}, stl_18()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_41())
            .fillColor('#000000')
            .text('If you do not receive the Statement of Account by the 5th day of each month, please contact the account opening bank before the 10th day of the month, Thank you for your kind cooperation.', px(3.6253), px(15.4568) + add_item, Object.assign({}, stl_70()))

        doc.font(`${__dirname}/simsun.ttf`)
            .fontSize(stl_67())
            .fillColor('#000000')
            .text(`若本行于发出此单后10日内仍未收到您的回复，则一切账项均作实论`, px(3.6253), px(16.0678) + px(0.2) + add_item, Object.assign({}, stl_18()))

        doc.font(`${__dirname}/times.ttf`)
            .fontSize(stl_41())
            .fillColor('#000000')
            .text('If no discrepancies are reported from you within 10 day of this statement, it will be deemed to be the final record.', px(3.6253), px(16.8571) + add_item, Object.assign({}, stl_63()))

        //印章
        doc.image(`${__dirname}/img_01.png`, px(32), px(12.3) + add_item, {width: 205 * 0.5, height: 108 * 0.5})
    }
    doc.end();
}

module.exports = {buildPDF};
