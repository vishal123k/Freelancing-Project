import React from "react";
import { Button } from "./Button";
import Card from "./small/Card";
import CardContent from "./small/CardContent";
import { ArrowRight } from "lucide-react";
import Reviews from "../components/small/Revievw";

const benefits = [
  {
    title: "100 Connects/month",
    description: "Spend to submit proposals for jobs you want",
  },
  {
    title: "View competitor bids",
    description: "See who you're up against to better tailor your proposals",
  },
  {
    title: "Uma, Upwork's Mindful AI",
    description: "Speed up tasks like writing cover letters and comparing job posts",
  },
  {
    title: "Get a 0% service fee*",
    description: "Enjoy lower fees on eligible contracts when you qualify",
  },
];

const faqs = [
  {
    question: "What are the Freelancer Basic and Freelancer Plus plans?",
    answer:
      "Freelancer Basic gives you limited Connects while Freelancer Plus includes 100 monthly Connects, visibility insights, and more.",
  },
  {
    question: "How do I upgrade my membership plan?",
    answer:
      "Log into Upwork > Go to Settings > Membership & Connects > Choose Freelancer Plus. Memberships are flexible and can be canceled anytime.",
  },
  {
    question: "When will my 100 monthly Connects be added?",
    answer:
      "They're credited every month on the same day you subscribe to Freelancer Plus.",
  },
  {
    question: "What is Uma?",
    answer:
      "Uma is Upwork’s Mindful AI. It can help write cover letters, compare jobs, and streamline your tasks as a freelancer.",
  },
  {
    question: "How can I use Connects?",
    answer:
      "Connects are used to submit proposals on job posts. They help you get noticed by clients.",
  },
  {
    question: "What if I signed up through the Apple App Store?",
    answer:
      "You’ll need to manage or cancel your subscription directly via your Apple account settings.",
  },
];

export default function FreelancerPlusPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Gain an edge with Freelancer Plus</h1>
          <p className="text-gray-600">
            Chosen by the best, 40% of subscribers are Top Rated or Top Rated Plus! Freelancer Plus members have access to 100 Connects per month and cutting-edge tools like Upwork’s Mindful AI.
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700 ">Upgrade to Freelancer Plus</Button>
        </div>
        <img
          src="/src/assets/signup.png"
          alt="Freelancer Plus preview"
          className="rounded-xl shadow-md"
        />
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-white">Freelancer Plus subscribers on average have a 50% higher chance of being hired*</h2>
        <p className="text-gray-500">Membership is a great investment. It’s affordable and low risk with an option to cancel anytime.</p>

        <div className="grid md:grid-cols-4 gap-4">
          {benefits.map((item, idx) => (
            <Card key={idx} className="h-full">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="link" className="text-green-600">Show all perks <ArrowRight className="inline ml-2 w-4 h-4" /></Button>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl text-center">
        <p className="italic text-gray-800 max-w-3xl mx-auto ">
          “Uma is a real time saver. Something that might take me an hour to do by myself, Uma will do in a fraction of that time. It makes running your business easier and more automated.”
        </p>
        <p className="mt-4 font-semibold ">Linda W.</p>
        <p className="text-sm text-gray-500">100% Job Success · Top Rated Plus</p>
      </section>

      <section className="bg-white p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4">
              <h3 className="font-semibold text-green-800">{faq.question}</h3>
              <p className="text-sm text-gray-700 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Reviews/>
    </div>
  );
}
