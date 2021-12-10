import { Component, OnInit } from '@angular/core';
import { ItemDataSource } from '../model/item-data-source';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.scss']
})
export class DonateFormComponent implements OnInit {

  private itemArray: ItemDataSource[] = [
    new ItemDataSource('動作 (Action)', 'ServiceURL', 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5', ''),
    new ItemDataSource('編號 (MerchantTradeNo)', 'MerchantTradeNo', '', '不可重複使用。英數字大小寫混合'),
    new ItemDataSource('時間 (MerchantTradeDate)', 'MerchantTradeDate', '2017/06/30 00:00:00', 'yyyy/MM/dd HH:mm:ss'),
    new ItemDataSource('類型 (PaymentType)', 'PaymentType', 'aio', 'aio'),
    new ItemDataSource('金額 (TotalAmount)', 'TotalAmount', '29999', '請帶整數，不可有小數點 僅限新台幣 金額不可為 0 元 CVS&BARCODE 最低限制為 30 元，最高限制為 30,000 元'),
    new ItemDataSource('描述 (TradeDesc)', 'TradeDesc', 'Desc', ''),
    new ItemDataSource('名稱 (ItemName)', 'ItemName', 'A#B', '商品名稱以符號 # 分'),
    new ItemDataSource('回傳網址 (ReturnURL)', 'ReturnURL', 'http://tn.sly-ha.com.tw/demo/hoyo/ECPay.php', ''),
    new ItemDataSource('付款方式 (ChoosePayment)', 'ChoosePayment', 'ALL', 'Credit:信用卡及 AndroidPay AndroidPay: AndroidPay WebATM:網路 ATM ATM:自動櫃員機 CVS:超商代碼 BARCODE:超商條碼 ALL:不指定')
  ];

  constructor() { }

  get getItemArray(): readonly ItemDataSource[] {
    return this.itemArray;
  }

  ngOnInit(): void {
  }

}
