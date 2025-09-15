import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { 
  Sun, 
  Wind, 
  Waves, 
  ArrowRight, 
  ArrowLeft, 
  CreditCard, 
  Wallet,
  Check,
  ShoppingCart
} from "lucide-react";

const BuyTokens = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    quantity: '',
    energySource: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    paymentMethod: ''
  });

  const steps = [
    { number: 1, title: "Quantity", description: "Choose amount" },
    { number: 2, title: "Energy Source", description: "Select type" },
    { number: 3, title: "Personal Info", description: "Your details" },
    { number: 4, title: "Payment & Summary", description: "Complete purchase" }
  ];

  const energySources = [
    {
      id: 'solar',
      name: 'Solar Energy',
      description: 'Clean energy from solar panels',
      icon: Sun,
      price: 1.00,
      color: 'text-yellow-600'
    },
    {
      id: 'wind',
      name: 'Wind Energy',
      description: 'Renewable energy from wind turbines',
      icon: Wind,
      price: 0.95,
      color: 'text-blue-600'
    },
    {
      id: 'hydroelectric',
      name: 'Hydroelectric Energy',
      description: 'Sustainable energy from water power',
      icon: Waves,
      price: 0.90,
      color: 'text-cyan-600'
    }
  ];

  const calculateTotal = () => {
    const quantity = parseFloat(formData.quantity) || 0;
    const selectedSource = energySources.find(source => source.id === formData.energySource);
    const price = selectedSource?.price || 1.00;
    return (quantity * price).toFixed(2);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Purchase Energy Credits</h1>
          <p className="text-muted-foreground">Buy verified renewable energy tokens</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step.number 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.number}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-muted-foreground">{step.description}</div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-24 h-0.5 mx-4 ${
                  currentStep > step.number ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="bg-card shadow-card max-w-4xl mx-auto">
          <CardContent className="p-8">
            {/* Step 1: Quantity */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Choose Quantity</h2>
                  <p className="text-muted-foreground">Select the amount of energy credits you want to purchase</p>
                </div>
                
                <div className="max-w-md mx-auto space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Number of Credits</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter quantity"
                      value={formData.quantity}
                      onChange={(e) => updateFormData('quantity', e.target.value)}
                      className="text-lg text-center"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {[100, 500, 1000].map(amount => (
                      <Button
                        key={amount}
                        variant="outline"
                        onClick={() => updateFormData('quantity', amount.toString())}
                        className="text-sm"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                  
                  {formData.quantity && (
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground">Estimated Value</div>
                      <div className="text-2xl font-bold">${formData.quantity}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Energy Source */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Select Energy Source</h2>
                  <p className="text-muted-foreground">Choose the type of renewable energy</p>
                </div>
                
                <RadioGroup
                  value={formData.energySource}
                  onValueChange={(value) => updateFormData('energySource', value)}
                  className="space-y-4"
                >
                  {energySources.map((source) => {
                    const Icon = source.icon;
                    return (
                      <div key={source.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value={source.id} id={source.id} />
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${source.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{source.name}</h3>
                            <p className="text-sm text-muted-foreground">{source.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${source.price}</div>
                            <div className="text-xs text-muted-foreground">per credit</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                  <p className="text-muted-foreground">Please provide your details for the purchase</p>
                </div>
                
                <div className="max-w-md mx-auto space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.personalInfo.firstName}
                        onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.personalInfo.lastName}
                        onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment Method & Order Summary */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Payment & Order Summary</h2>
                  <p className="text-muted-foreground">Review your order and choose payment method</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Order Summary */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Order Summary</h3>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between">
                          <span>Quantity:</span>
                          <span className="font-semibold">{formData.quantity} credits</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Energy Source:</span>
                          <span className="font-semibold">
                            {energySources.find(s => s.id === formData.energySource)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price per credit:</span>
                          <span className="font-semibold">
                            ${energySources.find(s => s.id === formData.energySource)?.price}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span>${calculateTotal()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Payment Method</h3>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => updateFormData('paymentMethod', value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <CreditCard className="w-5 h-5" />
                        <Label htmlFor="credit-card">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <RadioGroupItem value="wallet" id="wallet" />
                        <Wallet className="w-5 h-5" />
                        <Label htmlFor="wallet">Digital Wallet</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.quantity) ||
                    (currentStep === 2 && !formData.energySource) ||
                    (currentStep === 3 && (!formData.personalInfo.firstName || !formData.personalInfo.lastName || !formData.personalInfo.email))
                  }
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  disabled={!formData.paymentMethod}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Complete Purchase</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BuyTokens;
