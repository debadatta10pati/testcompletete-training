function loopOrders()
{
 // DDT.CSVDriver("C:\\testcomplete\\OrdersLoop.txt");
 Driver = DDT.ExcelDriver("C:\\testcomplete\\OrderDataDDTJavaScript.xlsx","TestData");
 while(!Driver.EOF())
    {
  DDT.CurrentDriver.DriveMethod("DynamicOrderTesting.createOrderDynamic");
  }

}