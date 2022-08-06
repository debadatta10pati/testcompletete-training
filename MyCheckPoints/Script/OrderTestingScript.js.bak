function createNewOrder()
{
  let orders = Aliases.Orders;
  Log.AppendFolder("OrderLogs")
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.SetText("John");
  textBox = groupBox.Street;
  textBox.SetText("7th main");
  textBox = groupBox.City;
  textBox.Keys("![ReleaseLast]");
  textBox.SetText("Manila");
  textBox = groupBox.State;
  textBox.SetText("MA");
  groupBox.Zip.SetText("780012");
  textBox = groupBox.CardNo;
  textBox.SetText("1234 8900 2345 6781");
  orderForm.ButtonOK.ClickButton();
  Log.PopLogFolder();
}