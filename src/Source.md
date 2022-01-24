//Subscription Plans
  const subscriptions = [
    {
      tier: "Free",
      price: "$0",
      features: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
      tier: "Plus",
      price: "$9",
      features: [
        "5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
      tier: "Pro",
      price: "$49",
      features: [
        "Unlimited Users",
        "150GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomains",
        "Monthly Status Reports",
      ],
    },
  ];
  // console.log(subscriptions.features[0]);

  {subscriptions.map((plan) => (
              <Pricecard
                key={plan.tier}
                tier={plan.tier}
                price={plan.price}
                // features={plan.features}
                featurePoint = {plan.features.map((feature) => (
                  <span>{feature}</span>
                ))}
              />
            ))}