'use client'

import Layout from '../components/Layout'

export default function TermsOfService() {
  return (
    <Layout>
      <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>
      <p className='mb-4'>
        Please read these Terms of Service carefully before using the
        Differy website and service.
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-4'>
        1. Acceptance of Terms
      </h2>
      <p className='mb-4'>
        By accessing or using our service, you agree to be bound by these Terms.
        If you disagree with any part of the terms, you may not use our service.
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-4'>2. Use of Service</h2>
      <p className='mb-4'>
        You agree to use the service only for purposes that are permitted by
        these Terms and any applicable law, regulation, or generally accepted
        practices or guidelines in the relevant jurisdictions.
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-4'>
        3. Intellectual Property
      </h2>
      <p className='mb-4'>
        The service and its original content, features, and functionality are
        and will remain the exclusive property of Differy and its licensors.
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-4'>4. Termination</h2>
      <p className='mb-4'>
        We may terminate or suspend your access to our service immediately,
        without prior notice or liability, for any reason whatsoever, including
        without limitation if you breach the Terms.
      </p>
    </Layout>
  )
}
