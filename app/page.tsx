import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, Github, Users, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="NoHam Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="font-bold text-xl gradient-text">NoHam</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="sm">
            Features
          </Button>
          <Button variant="ghost" size="sm">
            Pricing
          </Button>
          <Button variant="ghost" size="sm">
            About
          </Button>
          <Link href="/auth/signin">
            <Button size="sm">Get Started</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Trust Layer for{' '}
                <span className="gradient-text">Remote Hiring</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Detect hiring risks through comprehensive resume and GitHub analysis.{' '}
                <strong>Say No To Sohams</strong> and build a reliable remote workforce.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/auth/signin">
                <Button size="lg" className="hero-gradient text-white">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>7-day free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary">Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Comprehensive Hiring Protection
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI-powered platform analyzes multiple data points to give you confidence in your hiring decisions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-blue-600" />
                <CardTitle>Resume Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Advanced parsing and verification of resume content, skills, and work history.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Github className="h-8 w-8 text-purple-600" />
                <CardTitle>GitHub Deep Dive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Analyze coding patterns, contribution history, and project authenticity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600" />
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Comprehensive risk scoring and red flag detection for informed decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-gray-500">Risk Detection Rate</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-sm text-gray-500">Profiles Analyzed</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-500">Companies Protected</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Secure Your Hiring?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of companies already protecting their remote workforce with NoHam.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/auth/signin">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 NoHam. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="sm">
            Terms of Service
          </Button>
          <Button variant="ghost" size="sm">
            Privacy
          </Button>
        </nav>
      </footer>
    </div>
  );
} 