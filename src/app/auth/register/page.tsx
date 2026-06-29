import React from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              Luxe<span className="text-primary">Estate</span>
            </span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-primary hover:text-primary-hover">
            Sign in instead
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10 border-0">
          <CardContent className="p-0">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="mt-1">
                  <Input id="name" name="name" type="text" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                <div className="mt-1">
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="mt-1">
                  <Input id="password" name="password" type="password" autoComplete="new-password" required />
                </div>
              </div>

              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" required />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="#" className="text-primary hover:text-primary-hover">Terms</a> and <a href="#" className="text-primary hover:text-primary-hover">Privacy Policy</a>
                </label>
              </div>

              <div>
                <Button type="button" className="w-full text-base py-6">Register</Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or register with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">Google</Button>
                <Button variant="outline" className="w-full">Apple</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
