"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Network, Tv, FolderOpen, HelpCircle } from "lucide-react";

export default function HubDashboard() {  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Yusef's Resource Center</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the private resource hub for friends and family.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5" /> VPN Connection
            </CardTitle>
            <CardDescription>Connect to the home server with VPN</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn how to securely connect to the home network while away.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/hub/guides#vpn">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>


        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tv className="h-5 w-5" /> Plex Media
            </CardTitle>
            <CardDescription>Stream movies, TV shows, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access the family Plex media server for entertainment.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/hub/guides#plex">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>


        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5" /> File Access
            </CardTitle>
            <CardDescription>Access shared files and folders</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn how to access and manage shared family files.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/hub/guides#files">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>


        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" /> Troubleshooting
            </CardTitle>
            <CardDescription>Having issues?</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Common problems and solutions for connection issues.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/hub/guides#troubleshooting">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
