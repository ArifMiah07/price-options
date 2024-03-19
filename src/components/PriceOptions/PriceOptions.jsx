import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access",
            "Discounts on gym merchandise",
            "Free WiFi access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$49.99/month",
          "features": [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Access to swimming pool",
            "Sauna and steam room access",
            "Access to basketball court"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$79.99/month",
          "features": [
            "All features of Standard Membership",
            "Personal training sessions (limited)",
            "Nutritional guidance",
            "Complimentary towel service",
            "Access to racquetball courts"
          ]
        },
        {
          "id": 4,
          "name": "VIP Membership",
          "price": "$149.99/month",
          "features": [
            "All features of Premium Membership",
            "Unlimited personal training sessions",
            "Access to exclusive VIP lounge",
            "Priority booking for fitness classes",
            "Complimentary smoothie bar"
          ]
        }
      ]
       
    return (
        <div>
            <h1 className="text-5xl text-center my-3">Best Price in the town</h1>
            <div className="bg-cyan-200 p-0 m-2 grid md:grid-cols-2 lg:grid-cols-3 ">
              {
                  priceOptions.map((option)=> <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;