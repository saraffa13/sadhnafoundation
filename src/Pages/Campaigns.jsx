import React from "react";
import { Link } from "react-router-dom";

const Campaign = () => {
  const campaigns = [
    {
      id: 1,
      title: "शिक्षा अभियान",
      description: `हमारा उद्देश्य वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करना है।
      यह अभियान बच्चों के उज्ज्वल भविष्य के लिए समर्पित है।
      शिक्षा से समाज में समानता और प्रगति आती है।
      इस अभियान के तहत हम स्कूल निर्माण और शिक्षण सामग्री प्रदान करते हैं।
      आइए, इस पहल का हिस्सा बनें और बच्चों के जीवन में बदलाव लाएं।`,
      image:
        "https://media.istockphoto.com/id/1395154390/photo/close-up-shot-group-of-children-hands-busy-using-smartphone-at-school-corridor-concept-of.jpg?s=612x612&w=0&k=20&c=Wu1R82y2csZhAj5k6rLM9n8BLMmT1DTroCy5n9hJAZs=",
    },
    {
      id: 2,
      title: "स्वास्थ्य अभियान",
      description: `हमारा लक्ष्य सभी को बेहतर स्वास्थ्य सेवाएं प्रदान करना है।
      इस अभियान के तहत हम स्वास्थ्य शिविर और जागरूकता कार्यक्रम आयोजित करते हैं।
      स्वस्थ समाज ही प्रगति का आधार है।
      हम हाशिए पर रहने वाले समुदायों को स्वास्थ्य सेवाएं प्रदान करते हैं।
      इस अभियान में भाग लें और समाज को स्वस्थ बनाएं।`,
      image:
        "https://media.istockphoto.com/id/1298127415/photo/doctor-holding-red-heart-and-promoting-healthy-lifestyle-and-prevention-of-heart-diseases.jpg?s=612x612&w=0&k=20&c=GsJsD--lbKIIE9-BY7JSu98oa2CEKQEPoDdGRBJsRYM=",
    },
    {
      id: 3,
      title: "महिला सशक्तिकरण अभियान",
      description: `हम महिलाओं को आत्मनिर्भर बनाने के लिए काम करते हैं।
      इस अभियान के तहत हम उन्हें शिक्षा और रोजगार के अवसर प्रदान करते हैं।
      महिला सशक्तिकरण से समाज में समानता आती है।
      हमारा उद्देश्य महिलाओं को उनके अधिकार दिलाना है।
      इस अभियान का हिस्सा बनें और बदलाव लाएं।`,
      image:
        "https://media.istockphoto.com/id/2142388495/photo/happy-indian-young-woman-holding-flag-and-showing-finger-after-voting-over-isolate-background.jpg?s=612x612&w=0&k=20&c=RfTj91H4asBZXSSvwJqkC5lgFHjI8V0JRcXI5D6bRJk=",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          हमारे अभियान
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                  {campaign.title}
                </h2>
                <p className="text-gray-700 text-sm whitespace-pre-line mb-4">
                  {campaign.description}
                </p>
                <Link
                  to={`${index}`}
                  className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  और जानें
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaign;