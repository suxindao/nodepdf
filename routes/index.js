const express = require('express');
const pdfService = require('../service/pdf-service');
const Parser = require('json2csv').Parser
const downloadResource = require('../service/csv-service').downloadResource

const router = express.Router();

router.get('/csv', (req, res, next) => {
    // 列头与数据
    const fields = [
        {label: '日期', value: 'date'},
        {label: '业务类型', value: 'biz_type'},
        {label: '收入笔数', value: 'income_count'},
        {label: '收入金额(元)', value: 'income_amount'},
        {label: '支出笔数', value: 'outcome_count'},
        {label: '支出金额(元)', value: 'outcome_amount'},
        {label: '收支净额(元)', value: 'balance'},
    ];
    const data = [
        {
            date: '2023/7/29',
            biz_type: '交易',
            income_count: '2',
            income_amount: '10499',
            outcome_count: '2',
            outcome_amount: '62.99',
            balance: '10436.01',
        },
        {
            date: '合计',
            biz_type: '-',
            income_count: '2',
            income_amount: '10499',
            outcome_count: '2',
            outcome_amount: '62.99',
            balance: '10436.01',
        }
    ]

    return downloadResource(res, '电子账单.csv', fields, data);
})

router.get('/', (req, res, next) => {

    const pages_data = [
        {
            BillPeriod: ['20220501', '20220531'],
            BillPeriodBalance: '1,082,508.02',
            items: [
                {
                    Date: '20220502',
                    BusinessType: '网银费用',
                    BillNo: '',
                    Description: '网上银行服务费',
                    DebitCreditAmount: '-25.00',
                    Balance: '1,082,483.02',
                    CounterpartyAccountName: '南京佳和牙科技术有限公司',
                },
                {
                    Date: '20220908',
                    BusinessType: '网银费用',
                    BillNo: '',
                    Description: '网上企业银行-网上企业银行服务费',
                    DebitCreditAmount: '-25.00',
                    Balance: '890,977.93',
                    CounterpartyAccountName: '批量记账系统子批次清算账户',
                },
                {
                    Date: '20220921',
                    BusinessType: '账户结息',
                    BillNo: '',
                    Description: '收息，结息账号: 755946199810401',
                    DebitCreditAmount: '722.13',
                    Balance: '891,700.06',
                    CounterpartyAccountName: '应付利息-单位活期存款利息(自动计提)',
                }
            ],
            PrintTime: '2023年07月06日 11时54分'
        },
        {
            BillPeriod: ['20220601', '20220631'],
            BillPeriodBalance: '1,082,508.02',
            items: [
                {
                    Date: '20220502',
                    BusinessType: '网银费用',
                    BillNo: '',
                    Description: '网上银行服务费',
                    DebitCreditAmount: '-25.00',
                    Balance: '1,082,483.02',
                    CounterpartyAccountName: '',
                }
            ],
            PrintTime: '2023年07月06日 11时54分'
        }
    ]

    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=invoice.pdf`,
    })

    pdfService.buildPDF(
        pages_data,
        (chunk) => stream.write(chunk),
        () => stream.end()
    );
});

module.exports = router;
