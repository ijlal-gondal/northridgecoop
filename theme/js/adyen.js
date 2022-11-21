import { Client, CheckoutAPI } from '@adyen/api-library';
 
const client = new Client({ apiKey: "AQElhmfuXNWTK0Qc+iSEs0MZpOeUXYVZ2pVkaj7wJQ7hZyt9wpG3xRDBXVsNvuR83LVYjEgiTGAH-o99Xhl7yfCJxjEzndiUfr/4wrMjmdW09u7kI4YJZB8A=-M==Pk^(5y6?}28+%", environment: "TEST" });
const checkout = new CheckoutAPI(client);
 
checkout.sessions({
    amount: { currency: "EUR", value: 1000 },
    reference: "YOUR_PAYMENT_REFERENCE",
    returnUrl: "https://your-company.com/checkout?shopperOrder=12xy..",
    merchantAccount: 'TAGAccountECOM',
    countryCode: "NL"
})
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log(e);
    });

    const configuration = {
        environment: 'test', // Change to 'live' for the live environment.
        clientKey: 'test_QHX34GTOIVCLBDROKNMO73SHBA6KSSF5', // Public key used for client-side authentication: https://docs.adyen.com/development-resources/client-side-authentication
        analytics: {
          enabled: true // Set to false to not send analytics data to Adyen.
        },
        session: {
          id: 'CSD9CAC3...', // Unique identifier for the payment session.
          sessionData: 'Ab02b4c...' // The payment session data.
        },
        onPaymentCompleted: (result, component) => {
            console.info(result, component);
        },
        onError: (error, component) => {
            console.error(error.name, error.message, error.stack, component);
        },
        // Any payment method specific configuration. Find the configuration specific to each payment method:  https://docs.adyen.com/payment-methods
        // For example, this is 3D Secure configuration for cards:
        paymentMethodsConfiguration: {
          card: {
            hasHolderName: true,
            holderNameRequired: true,
            billingAddressRequired: true
          }
        }
      };
      
// Create an instance of AdyenCheckout using the configuration object.
// const checkout = await AdyenCheckout(configuration);
 
// Create an instance of Drop-in and mount it to the container you created.
const dropinComponent = checkout.create('dropin').mount('#dropin-container');

// Create an instance of AdyenCheckout to handle the shopper returning to your website.
// Configure the instance with the sessionId you extracted from the returnUrl.
// const checkout = await AdyenCheckout(configuration);
 
// Submit the redirectResult value you extracted from the returnUrl.
checkout.submitDetails({ details: { redirectResult: redirectResult } });

{
    onError: (error, component) => {
        console.error(error.name, error.message, component);
    }
}

