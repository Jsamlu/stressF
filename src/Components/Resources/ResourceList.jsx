import { useEffect, useState } from "react";

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/resources");
        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data = await response.json();
        setResources(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) return <p>Loading resources...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Available Resources</h2>
      {resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {resources.map((resource) => (
            <li key={resource.id} className="py-2">
              <h3 className="text-lg font-bold">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.type}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Resource
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResourceList;
