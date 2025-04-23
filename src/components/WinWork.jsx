import React from "react";
import Card from "./small/Card";
import CardContent from "./small/CardContent";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import Footer from "./Footer";

const data = [
  {
    title: "Boosted Profile",
    description: "Increase your chance of getting hired by up to 5%.",
  },
  {
    title: "Availability Badge",
    description: "Get hired faster with more invitation visibility.",
  },
  {
    title: "Boosted Proposals",
    description: "Increase client messages by up to 25%.",
  },
];

const successStories = [
  {
    title: "Boosted Proposals",
    name: "Tariq",
    quote: "I chose to advertise like any business to increase my proposals being read",
  },
  {
    title: "Boosted Profile",
    name: "Marisha",
    quote: "A well-packaged profile helps me get hired, even without reviews",
  },
  {
    title: "Boosted Proposals",
    name: "Sandeep",
    quote: "Boosting helps me get seen",
  },
];

export default function AdsPage() {
  return (
    <div className="px-4 py-12 space-y-16 max-w-7xl mx-auto font-sans">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">Win work with ads</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-white">
          Elevate your profile visibility and land more jobs with our versatile ad products. Whether you’re aiming for more invites or sealing the deal on proposals, we’ve got the tools to boost your success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base font-medium rounded-full shadow-md">
            Get started
          </Button>
          <Button variant="outline" className="px-6 py-2 text-base rounded-full border-gray-300 ">
            Learn about ad products
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">Three ways to achieve your work goals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <Card key={i} className="hover:shadow-xl transition-all border border-gray-100">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-xl text-gray-900">{item.title}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
                <Button variant="link" className="text-green-600 p-0 inline-flex items-center ">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 text-white" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">Success stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow border border-gray-100">
              <CardContent className="p-6 space-y-2">
                <span className="text-sm font-medium text-green-600">{story.title}</span>
                <p className="text-gray-900 text-base font-semibold">{story.quote}</p>
                <p className="text-sm text-gray-500 text-white">Read {story.name}'s success story</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 rounded-3xl p-8 shadow-inner">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Resources</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
          <li><strong>Ads content:</strong> How to setup and run effective work ads</li>
          <li><strong>Ads product guide:</strong> Create, manage, and optimize ad campaigns with success</li>
        </ul>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-6 text-white">Frequently asked questions</h2>
        <div className="grid gap-6 text-gray-700 text-base text-white">
          <div>
            <h3 className="font-semibold text-lg">How do I pay for ads?</h3>
            <p className="mt-1">You can use Upwork credits or a credit/debit card...</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Why do I need to use ads?</h3>
            <p className="mt-1">To increase visibility and get more work opportunities...</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">How do I get started?</h3>
            <p className="mt-1">Choose your objective, select an ad product, and begin setup...</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Where do I place a bid for an ad?</h3>
            <p className="mt-1">Use the Ads Manager dashboard to create and manage bids...</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
