function DriveSizeExample()
{
  Log.Message(aqFileSystem.GetDriveInfo("C").TotalSize);
}