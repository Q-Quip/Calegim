import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import styles from './GoolePay.module.scss'

export default function GooglePayButtonMy(props: any): React.ReactElement {
  return (
    <div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: props.amount,
            currencyCode: 'USD',
            countryCode: 'US',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        existingPaymentMethodRequired={props.existingPaymentMethodRequired}
        buttonColor={props.buttonColor}
        buttonType={props.buttonType}
        buttonLocale={props.buttonLocale}
        className={styles.google}
        buttonSizeMode="fill"
      />
    </div>
  );
}