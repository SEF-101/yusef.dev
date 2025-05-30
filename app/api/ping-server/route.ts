import { NextResponse } from 'next/server';
var ping = require ("net-ping");

export async function GET() {
  return new Promise((resolve) => {
    const session = ping.createSession();
    const target = '100.88.69.73';

    session.pingHost(target, function (error: any) {
      if (error) {
        resolve(NextResponse.json({ success: false, error: error.toString() }));
      } else {
        resolve(NextResponse.json({ success: true }));
      }
    });
  });
}
