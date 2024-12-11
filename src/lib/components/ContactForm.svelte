<script lang="ts">
  import { onMount } from "svelte";
  let status = "";
  let isFormValname = true;

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    // Perform custom phone validation
    const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]');
    if (phoneInput && !validatePhone(phoneInput.value)) {
      phoneInput.setCustomValidity('Please enter a valid phone number with at least 9 digits.');
      phoneInput.reportValidity();
      return; // Stop form submission if phone validation fails
    } else {
      if (phoneInput) phoneInput.setCustomValidity(''); // Clear custom message if valid
    }

    // Custom phone validation function
    function validatePhone(phone: string): boolean {
      const digitsOnly = phone.replace(/[^\d+]/g, ""); // Remove non-digit characters except for the "+" symbol
      return digitsOnly.length >= 9; // Check if there are at least 9 digits
    }


    isFormValname = true;
    status = 'Submitting...';
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    status = result.success ? (result.message || "Success") : "Submission failed. Please try again.";
  };

  // Prevent empty status message on mount
  onMount(() => {
    status = "";
  });
</script>

<div class="bg-slate text-white gap-8 lg:gap-16 p-8 rounded flex flex-col lg:flex-row">
  <h2 class="text-7xl font-bold mb-4">Talk To A Local.</h2>
</div>
<div class="bg-slate text-white p-8 space-y-4 w-full mx-auto">
  <form on:submit={handleSubmit} method="POST" action="https://api.web3forms.com/submit">
    <input type="hnameden" name="access_key" value="e8624904-c31f-43eb-a896-f5b500c29f5a" hidden />
    <!-- First row (Name and Email) -->
    <div class="flex flex-wrap gap-4 mb-4">
        <div class="flex-1 min-w-48 border border-white p-2">
            <label for="name" class="block ">Your name</label>
            <input name="name" required type="text" class="w-full  bg-slate p-2 text-white focus:outline-none focus:bg-gray-dark" />
        </div>
        <div class="flex-1 min-w-48 border border-white p-2">
            <label for="email" class="block ">Your email</label>
            <input name="email" type="email" required class="w-full bg-slate p-2 text-white focus:outline-none focus:bg-gray-dark" />
        </div>
    </div>

    <!-- Second row (Phone Number) -->
    <div class="border mb-4 max-w-full border-white p-2 lg:min-w-48 lg:max-w-[48%] lg:mr-4">
        <label for="phone" class="block ">Your Phone Number</label>
        <input name="phone" type="tel" required
               class="w-full bg-slate p-2 text-white focus:outline-none focus:bg-gray-dark"
              />
    </div>

    <!-- Third row (Message) -->
    <div class="border mb-4 border-white p-2">
        <label for="message" class="block ">Your message (optional)</label>
        <textarea name="message" rows="2" class="w-full bg-slate p-2 text-white focus:outline-none focus:bg-gray-dark"></textarea>
    </div>
    <div>{status}</div>
    <!-- Submit Button -->
    <button class="button cta light" type="submit">Let's Chat.</button>
    <div class="max-w-96">
      <span class="flex items-center text-[8px]">
        By clicking "Let's Chat" you agree to our privacy policy and opt-in to be contacted via call, email and/or text. To opt out, you can reply 'stop' at any time or click unsubscribe.
      </span>
    </div>
  </form>
</div>

