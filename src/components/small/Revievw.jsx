import React from "react";
import { ArrowRight } from "lucide-react";
import Card from "./Card";
import CardContent from "./CardContent";
import { Button } from "../Button";

const hrSkills = [
  { title: "Human Resource Managers", rating: "4.8", img: ["👤", "👤", "👤"] },
  { title: "HR Consultants", rating: "4.9", img: ["👤", "👤", "👤"] },
  { title: "Recruiters", rating: "4.7", img: ["👤", "👤", "👤"] },
  { title: "Compensation Specialists", rating: "4.8", img: ["👤", "👤", "👤"] },
  { title: "HRIS Specialists", rating: "4.7", img: ["👤", "👤", "👤"] },
  { title: "eLearning Specialists", rating: "4.9", img: ["👤", "👤", "👤"] },
  { title: "Instructional Designers", rating: "4.8", img: ["👤", "👤", "👤"] },
  { title: "Training & Development Specialists", rating: "4.8", img: ["👤", "👤", "👤"] },
];

export default function HrExpertSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Specialized HR and training experts you can count on</h2>
        <div className="flex justify-center gap-10 flex-wrap text-gray-700 text-sm">
          <div>
            <p className="text-yellow-500 font-semibold text-xl text-white">⭐ 4.90</p>
            <p className="text-white">Average rating for work with HR professionals.</p>
          </div>
          <div>
            <p className="text-black font-semibold text-xl text-white ">1,900+ contracts</p>
            <p className="text-white">Involving HR & training work in the last year.</p>
          </div>
          <div>
            <p className="text-black font-semibold text-xl text-white">105 skills</p>
            <p className="text-white">Represented by talent on Upwork.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {hrSkills.map((skill, idx) => (
          <Card key={idx} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
            <CardContent>
              <h3 className="font-medium text-gray-900">{skill.title}</h3>
              <p className="text-sm text-gray-600 mb-2">⭐ {skill.rating} average rating</p>
              <div className="flex items-center gap-1 mb-2">
                {skill.img.map((icon, i) => (
                  <span key={i} className="text-xl">{icon}</span>
                ))}
              </div>
              <ArrowRight className="text-green-600 w-5 h-5 ml-auto" />
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="text-center">
        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">See more skills</Button>
      </div>
    </div>
  );
}
