import { useState } from "react";
import { Upload, FileText, X, Loader } from "lucide-react";

const Prescription = () => {
    const [prescription, setPrescription] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [supportingDetails, setSupportingDetails] = useState("");

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPrescription(file);
        }
    };

    const cleanText = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/\n/g, "<br/>");
    };

    const handlePrescriptionAnalysis = async () => {
        if (!prescription) {
            alert("Please upload a prescription first!");
            return;
        }

        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append("image", prescription);
        formData.append("details", supportingDetails);

        try {
            const response = await fetch("http://127.0.0.1:10000/analyze-prescription", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setResult(data);
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error("Error connecting to API:", error);
            alert("Failed to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files.length > 0) {
            setPrescription(e.dataTransfer.files[0]);
        }
    };

    const clearFile = () => {
        setPrescription(null);
        setResult(null);
    };

    return (
        <div className="min-h-screen flex bg-gray-900 text-white">
            <div className="flex-1 overflow-auto p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2">Prescription Analysis</h1>
                    <p className="text-gray-400 mb-6">Upload your prescription for AI-powered insights</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                            <h2 className="text-xl font-medium flex items-center mb-4">
                                <FileText size={20} className="mr-2 text-blue-400" />
                                Upload Prescription
                            </h2>

                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center ${
                                    dragActive ? "border-blue-500 bg-blue-500/10" : "border-gray-600 hover:border-blue-400 hover:bg-gray-800/30"
                                }`}
                            >
                                {!prescription ? (
                                    <>
                                        <Upload size={40} className="text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium text-white mb-2">Drag and drop your file here</h3>
                                        <p className="text-gray-400 text-sm mb-4 text-center">Supported formats: PDF, JPG, PNG</p>
                                        <label className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg">
                                            Browse Files
                                            <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.jpg,.jpeg,.png" />
                                        </label>
                                    </>
                                ) : (
                                    <div className="w-full">
                                        <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                                            <div className="flex items-center">
                                                <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                                    <FileText size={20} className="text-blue-400" />
                                                </div>
                                                <div className="truncate">
                                                    <p className="text-white font-medium truncate">{prescription.name}</p>
                                                    <p className="text-gray-400 text-xs">{(prescription.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            </div>
                                            <button onClick={clearFile} className="p-1 bg-gray-600 rounded-full hover:bg-gray-500">
                                                <X size={16} className="text-gray-300" />
                                            </button>
                                        </div>

                                        <form className="mt-6 mb-4">
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Supporting Details (Optional)</label>
                                            <textarea
                                                value={supportingDetails}
                                                onChange={(e) => setSupportingDetails(e.target.value)}
                                                placeholder="Add any additional details if necessary..."
                                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                                                rows="4"
                                            ></textarea>
                                        </form>

                                        <button
                                            onClick={handlePrescriptionAnalysis}
                                            disabled={loading}
                                            className={`w-full mt-4 py-3 rounded-lg flex items-center justify-center ${
                                                loading ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg"
                                            }`}
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader size={18} className="animate-spin mr-2" />
                                                    Analyzing Prescription...
                                                </>
                                            ) : (
                                                "Analyze Prescription"
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                            <h2 className="text-xl font-medium mb-4">Analysis Results</h2>
                            <div>
                                {result ? (
                                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: cleanText(result.analysis) }}></p>
                                ) : (
                                    <p className="text-gray-400">Upload a prescription and analyze to see results here</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prescription;