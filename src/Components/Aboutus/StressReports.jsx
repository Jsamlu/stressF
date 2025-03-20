import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const reports = [
  {
    question: "Which type of stress is most common?",
    chartData: [
      { name: "Work Life", value: 40 },
      { name: "Academic", value: 30 },
      { name: "Social", value: 20 },
      { name: "Peer Pressure", value: 10 },
    ],
    description: "Based on recent research, Work Life stress is the leading cause of mental strain, particularly among professionals balancing career and personal life responsibilities.",
  },
  {
    question: "Which stress solutions were most effective?",
    chartData: [
      { name: "Mindfulness", value: 45 },
      { name: "Therapy", value: 35 },
      { name: "Self-Help Resources", value: 15 },
      { name: "Group Counseling", value: 5 },
    ],
    description: "Studies show that mindfulness and therapy have proven highly effective, helping individuals calm their minds and regain focus in stressful situations.",
  },
  {
    question: "What was the user satisfaction rate with professional counseling?",
    chartData: [
      { name: "Highly Satisfied", value: 50 },
      { name: "Moderately Satisfied", value: 30 },
      { name: "Neutral", value: 15 },
      { name: "Not Satisfied", value: 5 },
    ],
    description: "User feedback indicates that professional counseling provided clarity and valuable coping strategies, with over half reporting a high level of satisfaction.",
  },
  {
    question: "Which games were the most effective for stress relief?",
    chartData: [
      { name: "Puzzle Games", value: 40 },
      { name: "Breathing Exercises", value: 30 },
      { name: "Memory Games", value: 20 },
      { name: "Color Therapy Games", value: 10 },
    ],
    description: "Engaging activities like puzzle games and breathing exercises emerged as the favorites, offering a creative yet relaxing escape from stress.",
  },
  {
    question: "Which activities were most recommended for stress relief?",
    chartData: [
      { name: "Meditation", value: 40 },
      { name: "Physical Exercise", value: 30 },
      { name: "Journaling", value: 20 },
      { name: "Outdoor Walks", value: 10 },
    ],
    description: "Experts consistently recommend meditation and physical exercise for their profound impact on stress management and mental well-being.",
  },
  {
    question: "How effective was the chatbot in resolving user stress issues?",
    chartData: [
      { name: "Highly Helpful", value: 40 },
      { name: "Moderately Helpful", value: 30 },
      { name: "Neutral", value: 20 },
      { name: "Not Helpful", value: 10 },
    ],
    description: "The chatbot's ability to provide immediate guidance has been well-received, with 70% of users rating it as helpful in managing stress.",
  },
  {
    question: "Which type of professionals were most recommended?",
    chartData: [
      { name: "Therapists", value: 50 },
      { name: "Psychologists", value: 35 },
      { name: "Life Coaches", value: 10 },
      { name: "General Counselors", value: 5 },
    ],
    description: "Therapists and psychologists emerged as the top recommendations for users seeking professional help to navigate stress effectively.",
  },
  {
    question: "Which age group among 18-25 faces the most stress?",
    chartData: [
      { name: "18-20", value: 35 },
      { name: "21-23", value: 45 },
      { name: "24-25", value: 20 },
    ],
    description: "Age group 21-23 faces the highest stress levels, likely due to academic pressures, job hunting, and career uncertainties.",
  },
  {
    question: "At what time of day do people face stress or use the platform?",
    chartData: [
      { name: "Morning", value: 20 },
      { name: "Afternoon", value: 30 },
      { name: "Evening", value: 40 },
      { name: "Night", value: 10 },
    ],
    description: "Platform usage peaks in the evening, as users unwind after daily challenges and seek stress-relief activities.",
  },
  {
    question: "How many people attended community events?",
    chartData: [
      { name: "Attendees", value: 80 },
      { name: "Non-Attendees", value: 20 },
    ],
    description: "Community events witnessed significant interest, with 80% of platform users attending at least one event.",
  },
  {
    question: "Which events were preferred and which age group participated?",
    chartData: [
      { name: "Tree Plantation (18-20)", value: 25 },
      { name: "Mental Health Workshop (21-23)", value: 35 },
      { name: "Sports Meetup (24-25)", value: 20 },
      { name: "Art Therapy (Mixed Age)", value: 20 },
    ],
    description: "Mental Health Workshops were most popular among the 21-23 age group, reflecting their focus on self-care and coping strategies.",
  }
];

const COLORS = ["#4f46e5", "#22c55e", "#eab308", "#ef4444", "#10b981"];

const ReportItem = ({ question, chartData, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="text-xl font-bold text-indigo-700">{question}</h3>
        {isOpen ? <ChevronUp className="text-indigo-500" /> : <ChevronDown className="text-indigo-500" />}
      </div>
      {isOpen && (
        <div className="mt-6">
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">{description}</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                data={chartData}
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            {chartData.map((item, index) => (
              <li key={index} className="text-gray-700 font-medium">
                <span className="text-indigo-700">{item.name}:</span> {item.value}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const StressReports = () => {
  return (
    <div
      className="p-8 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
      }}
    >
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
        Stress Reports
      </h1>
      <div className="space-y-8">
        {reports.map((report, index) => (
          <ReportItem
            key={index}
            question={report.question}
            chartData={report.chartData}
            description={report.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StressReports; 