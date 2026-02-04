<script setup lang="ts">
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
import MainImage from "/images/background/privacy-policy.png";
</script>

<template>
  <div class="common-banner position-relative">
    <v-img :src="MainImage" cover height="650" class="w-100"></v-img>
    <div class="banner-overlay"></div>
    <div class="container-lg">
      <div class="common-banner-content">
        <div class="mw-460">
          <!-- Top row: icon + paragraph -->
          <div class="d-flex ga-6">
            <img
              :src="AnimatedIcon"
              alt="icon"
              height="44"
              width="44"
              class="icon-rotate"
            />
            <p class="text-white text-subtitle-1 mb-0">
              <span class="opacity-70">Your Privacy Matters:</span>
              <span class="text-primary opacity-100"> How I Handle </span>
              <span class="opacity-70">Your Information</span>
            </p>
          </div>
        </div>
        <!-- Bottom row: title + badge -->
        <div
          class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3"
        >
          <h1 class="text-white text-h1 font-weight-bold mb-0">
            Privacy Policy
          </h1>
          <SharedBigBadge />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-darkgray leagal">
    <div class="container-lg py-lg-16 py-8">
      <p class="text-subtitle-1">
        This Privacy Policy explains how I, as a UI/UX Designer, collect, use, and protect
        personal information from clients, visitors to my portfolio website, and anyone
        who contacts me for design services. I am committed to protecting your privacy
        and handling your data with care and transparency.
      </p>
      <p class="text-subtitle-1">
        By using this website or engaging my design services, you consent to the
        collection and use of your information as described in this Privacy Policy.
        This policy applies to my portfolio website, contact forms, email communications,
        and any other interactions related to my UI/UX design services.
      </p>
      <p class="text-subtitle-1">
        This website may contain links to external platforms such as Behance, Dribbble,
        LinkedIn, and other professional networks. Those sites have their own privacy
        policies, and I am not responsible for their privacy practices.
      </p>
      <p class="text-subtitle-1">
        I may update this Privacy Policy from time to time to reflect changes in my
        practices or for legal reasons. Any updates will be posted on this page with
        a revised date. I encourage you to review this policy periodically.
      </p>
      <div class="my-6">
        <h4 class="text-h4 text-dark">Information I Collect</h4>
        <p class="mt-6 text-subtitle-1">
          When you contact me or use my services, I may collect the following information:
          your name, email address, phone number, company name (if applicable), project details,
          and any other information you choose to provide in contact forms or email communications.
          This information is used solely to respond to inquiries and provide design services.
        </p>
        <p class="text-subtitle-1">
          I may also collect non-personal information such as browser type, device information,
          and website usage data through analytics tools to improve my portfolio website and
          understand visitor behavior. This data is anonymous and cannot be used to identify you.
        </p>
      </div>
      <div class="my-6">
        <h4 class="text-h4 text-dark">
          How I Use Your Information
        </h4>
        <p class="mt-6 text-subtitle-1">
          I use the information you provide to: (1) respond to your inquiries about design services;
          (2) communicate with you about projects, proposals, and deliverables; (3) send project
          updates and request feedback; (4) improve my services and portfolio website;
          (5) comply with legal obligations if required.
        </p>
        <p class="mt-6 text-subtitle-1">
          I do not collect or store payment information. All payments are processed through
          secure third-party payment processors (such as PayPal, Stripe, or bank transfers).
          Please refer to their privacy policies for information on how they handle your data.
        </p>
      </div>
      <div class="my-6">
        <h4 class="text-h4 text-dark">
          Data Protection & Security
        </h4>
        <p class="mt-6 text-subtitle-1">
          I take reasonable measures to protect your personal information from unauthorized
          access, loss, or misuse. However, no method of transmission over the internet is
          100% secure. I store client information securely and only retain it for as long as
          necessary to provide services or as required by law.
        </p>
        <p class="text-subtitle-1">
          I will never sell, rent, or share your personal information with third parties for
          marketing purposes. Your information is used exclusively for providing UI/UX design
          services and maintaining professional communication.
        </p>
      </div>
    </div>
  </div>
</template>
