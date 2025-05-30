"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Network, Terminal, Key, Download, Code, BookOpen, Bookmark, Laptop, Server, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HubDashboard() {
  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Yusef's Resource Portal</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A private collection of guides, tools, and resources for friends and family.
        </p>
      </div>

      {/* Main categories in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Server Guide*/}
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">All-in-One</Badge>
            <CardTitle className="flex items-center gap-2 font-light text-xl">
              <Server className="h-5 w-5" /> Home Server Access
            </CardTitle>
            <CardDescription>Everything you need to connect</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Complete guide for accessing all home server resources:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>VPN connection setup</li>
              <li>Plex Media streaming</li>
              <li>Shared files access</li>
              <li>Troubleshooting help</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/hub/guides">View Complete Guide</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* PowerShell Scripts */}
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">Tools</Badge>
            <CardTitle className="flex items-center gap-2 font-light text-xl">
              <Terminal className="h-5 w-5" /> PowerShell Scripts
            </CardTitle>
            <CardDescription>Useful automation scripts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Collection of helpful PowerShell scripts for:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>System maintenance and cleanup</li>
              <li>Network diagnostics</li>
              <li>Backup automation</li>
              <li>File management utilities</li>
            </ul>
          </CardContent>          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/hub/resources?section=powershell">Browse Scripts</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Software Activation */}        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-green-500/10 text-green-500 hover:bg-green-500/20">Guides</Badge>
            <CardTitle className="flex items-center gap-2 font-light text-xl">
              <Key className="h-5 w-5" /> Software Activation
            </CardTitle>
            <CardDescription>Windows and software activation guides</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Step-by-step guides for activating software:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Windows OS activation</li>
              <li>Office suite activation</li>
              <li>Adobe products</li>
              <li>Other premium software</li>
            </ul>
          </CardContent>          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/hub/resources?section=activation">View Guides</Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* Downloads Section */}
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">Resources</Badge>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Download className="h-5 w-5" /> Essential Downloads
            </CardTitle>
            <CardDescription>Curated software collection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Direct downloads for programs:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Privacy & security tools</li>
              <li>Media players & converters</li>
              <li>System utilities</li>
              <li>Browser extensions</li>
            </ul>
          </CardContent>          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/hub/resources?section=downloads">Browse Downloads</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Helpful Websites */}
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-pink-500">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-pink-500/10 text-pink-500 hover:bg-pink-500/20">Collection</Badge>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Bookmark className="h-5 w-5" /> Useful Websites
            </CardTitle>
            <CardDescription>Bookmarked resources and tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Curated list of helpful online resources:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Free streaming sites</li>
              <li>File conversion tools</li>
              <li>Software alternatives</li>
              <li>Learning resources</li>
            </ul>
          </CardContent>          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/hub/resources?section=websites">View Collection</Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* Tech Support */}
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-red-500">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-red-500/10 text-red-500 hover:bg-red-500/20">Support</Badge>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Wrench className="h-5 w-5" /> Tech Support
            </CardTitle>
            <CardDescription>Family tech support resources</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Help for common tech problems:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Computer maintenance guides</li>
              <li>Phone & tablet troubleshooting</li>
              <li>Printer setup help</li>
              <li>Internet connectivity issues</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/hub/support">Get Help</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Recent Updates Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Updates</h2>
          <Badge variant="outline" className="px-2">
            Updated May 30, 2025
          </Badge>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
          <ul className="space-y-2">
            <li className="flex gap-2 items-baseline">
              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">NEW</Badge>
              <span>Added PowerShell script collection for system maintenance</span>
            </li>
            <li className="flex gap-2 items-baseline">
              <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">UPDATE</Badge>
              <span>Updated Windows 11 activation guide with latest methods</span>
            </li>
            <li className="flex gap-2 items-baseline">
              <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30">FIXED</Badge>
              <span>Fixed VPN connection instructions for new router setup</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Quick Links Footer */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground">Have suggestions? Need help?</p>
          <p className="text-sm">Contact me directly or leave a note in our family chat.</p>
        </div>
        <div className="flex gap-3">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/hub/request">Request Resource</Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <a href="mailto:yusef@example.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
