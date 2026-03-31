// import React from 'react';

// const StepsSection = () => {
//   return (
//     <section className="py-20 px-5 bg-white text-center">
//       {/* Header Section */}
//       <div className="mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
//           Get Started In 3 Steps
//         </h2>
//         <p className="text-gray-500 text-lg">
//           Start using premium digital tools in minutes, not hours.
//         </p>
//       </div>

//       {/* Cards Container */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {steps.map((step) => (
//           <div 
//             key={step.id} 
//             className="relative p-10 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col items-center"
//           >
//             {/* Step Number Badge */}
//             <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold px-2 py-1 rounded-full">
//               {step.id}
//             </span>

//             {/* Icon Circle */}
//             <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-6 text-3xl text-[#7C3AED]">
//                {/* এখানে আপনার আইকন বসবে */}
//                {step.icon}
//             </div>

//             {/* Content */}
//             <h3 className="text-2xl font-bold text-[#111827] mb-3">
//               {step.title}
//             </h3>
//             <p className="text-gray-500 leading-relaxed text-sm">
//               {step.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StepsSection;