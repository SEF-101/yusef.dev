"use client";
import { Terminal, Download, Bookmark, Key } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ResourcesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  
  // Refs for scrolling to sections
  const powershellRef = useRef<HTMLDivElement>(null);
  const downloadsRef = useRef<HTMLDivElement>(null);
  const websitesRef = useRef<HTMLDivElement>(null);
  const activationRef = useRef<HTMLDivElement>(null);
  
  // Scroll to section on mount or when section param changes
  useEffect(() => {
    if (section) {
      setTimeout(() => {
        switch(section) {
          case "powershell":
            powershellRef.current?.scrollIntoView({ behavior: "smooth" });
            break;
          case "downloads":
            downloadsRef.current?.scrollIntoView({ behavior: "smooth" });
            break;
          case "websites":
            websitesRef.current?.scrollIntoView({ behavior: "smooth" });
            break;
          case "activation":
            activationRef.current?.scrollIntoView({ behavior: "smooth" });
            break;
        }
      }, 100);
    }
  }, [section]);
  
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Resource Collection</h1>
        <p className="text-muted-foreground">
          A consolidated collection of useful resources and tools
        </p>
      </div>
      
      {/* Quick jump navigation */}
      <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
        <div className="font-medium mb-2">Jump to section:</div>
        <div className="flex flex-wrap gap-2">
          <Link 
            href="?section=powershell" 
            className="px-3 py-1 bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 rounded-full text-sm flex items-center gap-1"
          >
            <Terminal className="h-3.5 w-3.5" /> PowerShell
          </Link>
          <Link 
            href="?section=downloads" 
            className="px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 rounded-full text-sm flex items-center gap-1"
          >
            <Download className="h-3.5 w-3.5" /> Downloads
          </Link>
          <Link 
            href="?section=websites" 
            className="px-3 py-1 bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 rounded-full text-sm flex items-center gap-1"
          >
            <Bookmark className="h-3.5 w-3.5" /> Websites
          </Link>
          <Link 
            href="?section=activation" 
            className="px-3 py-1 bg-green-500/10 text-green-500 hover:bg-green-500/20 rounded-full text-sm flex items-center gap-1"
          >
            <Key className="h-3.5 w-3.5" /> Activation
          </Link>
        </div>
      </div>
      
      {/* PowerShell Scripts Section */}
      <div ref={powershellRef} className="pt-10">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="h-6 w-6 text-purple-500" />
          <h2 className="text-2xl font-medium text-purple-500">PowerShell Scripts</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-2">System Cleanup Script</h3>
            <p className="mb-3">Automatically cleans temporary files, empties recycle bin, and clears browser caches.</p>
            <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              <code>{`# System Cleanup PowerShell Script
# Run as administrator for best results

# Clear Windows temp files
Remove-Item -Path "$env:temp\\*" -Force -Recurse -ErrorAction SilentlyContinue
Write-Host "Temporary files removed." -ForegroundColor Green

# Empty Recycle Bin
Clear-RecycleBin -Force -ErrorAction SilentlyContinue
Write-Host "Recycle Bin emptied." -ForegroundColor Green

# Clear browser caches - Chrome example
$chromePath = "$env:LOCALAPPDATA\\Google\\Chrome\\User Data\\Default\\Cache"
if (Test-Path $chromePath) {
    Remove-Item -Path "$chromePath\\*" -Force -Recurse -ErrorAction SilentlyContinue
    Write-Host "Chrome cache cleared." -ForegroundColor Green
}`}</code>
            </pre>
            <div className="mt-3 text-sm text-muted-foreground">
              Save this as a .ps1 file and run with administrator privileges.
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-2">Network Diagnostics Tool</h3>
            <p className="mb-3">Tests your network and provides detailed diagnostics about connection issues.</p>
            <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              <code>{`# Network Diagnostics PowerShell Script

# Define target websites to test
$websites = @("google.com", "amazon.com", "microsoft.com")

# Test internet connectivity
$internetTest = Test-Connection -ComputerName 8.8.8.8 -Count 4 -ErrorAction SilentlyContinue
if ($internetTest) {
    Write-Host "✓ Internet connection is working" -ForegroundColor Green
    Write-Host "  Average response time: $([math]::Round(($internetTest | Measure-Object -Property ResponseTime -Average).Average,2)) ms" -ForegroundColor Gray
} else {
    Write-Host "✗ Internet connection failed" -ForegroundColor Red
}

# Test DNS resolution
Write-Host "Testing DNS resolution..." -ForegroundColor Yellow
foreach ($site in $websites) {
    try {
        $dns = Resolve-DnsName -Name $site -ErrorAction Stop
        Write-Host "✓ DNS resolution for $site succeeded" -ForegroundColor Green
    } catch {
        Write-Host "✗ DNS resolution for $site failed" -ForegroundColor Red
    }
}`}</code>
            </pre>
            <div className="mt-3 text-sm text-muted-foreground">
              Run this script when experiencing network connectivity issues.
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">More scripts coming soon...</p>
          </div>
        </div>
      </div>
      
      {/* Downloads Section */}
      <div ref={downloadsRef} className="pt-10 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <Download className="h-6 w-6 text-amber-500" />
          <h2 className="text-2xl font-medium text-amber-500">Essential Downloads</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-2">Privacy & Security</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Bitwarden</div>
                  <div className="text-sm text-muted-foreground">Free open-source password manager</div>
                </div>
                <Link href="https://bitwarden.com/download/" target="_blank" className="text-sm text-blue-500 hover:underline">Download</Link>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <div className="font-medium">VeraCrypt</div>
                  <div className="text-sm text-muted-foreground">Disk encryption software</div>
                </div>
                <Link href="https://www.veracrypt.fr/en/Downloads.html" target="_blank" className="text-sm text-blue-500 hover:underline">Download</Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-2">Media & Files</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <div className="font-medium">VLC Media Player</div>
                  <div className="text-sm text-muted-foreground">Play any media format</div>
                </div>
                <Link href="https://www.videolan.org/vlc/" target="_blank" className="text-sm text-blue-500 hover:underline">Download</Link>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <div className="font-medium">7-Zip</div>
                  <div className="text-sm text-muted-foreground">File archiver with high compression ratio</div>
                </div>
                <Link href="https://www.7-zip.org/download.html" target="_blank" className="text-sm text-blue-500 hover:underline">Download</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Websites Section */}
      <div ref={websitesRef} className="pt-10 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <Bookmark className="h-6 w-6 text-pink-500" />
          <h2 className="text-2xl font-medium text-pink-500">Useful Websites</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-3">Media & Entertainment</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.justwatch.com" target="_blank" className="text-blue-500 hover:underline">JustWatch</Link>
                <p className="text-sm text-muted-foreground">Find where to stream movies and shows</p>
              </li>
              <li>
                <Link href="https://archive.org" target="_blank" className="text-blue-500 hover:underline">Internet Archive</Link>
                <p className="text-sm text-muted-foreground">Free books, movies, music and more</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-3">Utilities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://wetransfer.com" target="_blank" className="text-blue-500 hover:underline">WeTransfer</Link>
                <p className="text-sm text-muted-foreground">Send large files easily</p>
              </li>
              <li>
                <Link href="https://temp-mail.org" target="_blank" className="text-blue-500 hover:underline">Temp Mail</Link>
                <p className="text-sm text-muted-foreground">Temporary email addresses</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-3">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.photopea.com" target="_blank" className="text-blue-500 hover:underline">Photopea</Link>
                <p className="text-sm text-muted-foreground">Free online photo editor like Photoshop</p>
              </li>
              <li>
                <Link href="https://www.remove.bg" target="_blank" className="text-blue-500 hover:underline">Remove.bg</Link>
                <p className="text-sm text-muted-foreground">Remove image backgrounds</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Software Activation Section */}
      <div ref={activationRef} className="pt-10 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <Key className="h-6 w-6 text-green-500" />
          <h2 className="text-2xl font-medium text-green-500">Software Activation</h2>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Windows Activation</h3>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
              <p className="text-sm text-yellow-700">⚠️ Use these methods at your own risk. They are provided for educational purposes only.</p>
            </div>
            <p className="mb-3">Run the following script in an elevated PowerShell window:</p>
            <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              <code>{`# Windows Activation Script
# Run as administrator

# KMS server setup
$kms = "kms.example.org"
slmgr /skms $kms
slmgr /ato

Write-Host "Windows activation completed. Please restart your computer."`}</code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Office Activation</h3>
            <p className="mb-3">For Office products, use the following method:</p>
            <ol className="list-decimal pl-5 space-y-2 mb-4">
              <li>Download the Office deployment tool from Microsoft's website</li>
              <li>Create a configuration XML file for your Office version</li>
              <li>Run the deployment tool with your configuration</li>
              <li>Apply a volume license key using the script below</li>
            </ol>
            <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              <code>{`# Office KMS activation
# Run as administrator in Command Prompt

cd "C:\\Program Files\\Microsoft Office\\Office16"
cscript ospp.vbs /sethst:kms.example.org
cscript ospp.vbs /act`}</code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Back to dashboard button */}
      <div className="flex justify-center pt-4">
        <Link
          href="/hub"
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
