﻿function createOrderDynamic()
{
  let orders = Aliases.Orders;
  Log.AppendFolder(DDT.CurrentDriver.Value("name"))
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.SetText(DDT.CurrentDriver.Value("name"));
  textBox = groupBox.Street;
  textBox.SetText(DDT.CurrentDriver.Value("street"));
  textBox = groupBox.City;
  textBox.SetText(DDT.CurrentDriver.Value("city"));
  textBox = groupBox.State;
  textBox.SetText(DDT.CurrentDriver.Value("state"));
  groupBox.Zip.SetText(DDT.CurrentDriver.Value("zip"));
  //textBox = groupBox.CardNo;
  //textBox.SetText(DDT.CurrentDriver.Value("name"));
  orderForm.ButtonOK.ClickButton();
  Log.PopLogFolder();
}