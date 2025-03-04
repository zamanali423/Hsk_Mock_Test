import React, { useCallback, useEffect, useState } from "react";
import "../../css/rectangle_card.css";

const RectangleCard = ({ level }) => {
  const [allPapers, setAllPapers] = useState([]);

  // Fetch papers from API
  const getAllPapers = useCallback(async () => {
    try {
      const response = await fetch("https://hskmocktestbackend.vercel.app/papers/all_papers");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const papersList = await response.json();
      setAllPapers(papersList.papers || []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching papers:", error);
    }
  }, []);

  useEffect(() => {
    getAllPapers();
  }, [getAllPapers]);

  // Filter papers based on level
  const separateLevels = allPapers
    .map((paper) => {
      if (
        paper.beginner.some(
          (b) => b.levelName.toLowerCase() === level.toLowerCase()
        )
      ) {
        return paper.beginner;
      } else if (
        paper.intermediate.some(
          (b) => b.levelName.toLowerCase() === level.toLowerCase()
        )
      ) {
        return paper.intermediate;
      } else if (
        paper.advanced.some(
          (b) => b.levelName.toLowerCase() === level.toLowerCase()
        )
      ) {
        return paper.advanced;
      }
      return null; // If no match, return null
    })
    .filter(Boolean) // Remove null values
    .flat(); // Flatten the array so it's not nested

  return (
    <div className="rc-container container">
      <div className="row">
        {separateLevels.map(
          (paper, index) =>
            paper.levelName.toLowerCase() === level.toLowerCase() && (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="rectangle-card">
                  <p className="main-text">
                    <span style={{ textTransform: "uppercase" }}>{level}</span>{" "}
                    Mock Test Paper (
                    {paper.seq && String(paper.seq).slice(2) !== "0"
                      ? String(paper.seq).slice(2)
                      : 10}
                    )
                  </p>

                  {/* Another paragraph aligned to the left */}
                  <p className="left-text">
                    {paper.question_count} questions in total | {paper.timeFull}{" "}
                    min
                  </p>

                  {/* Horizontal Line */}
                  <hr className="divider" />

                  {/* Buttons aligned to the right */}
                  <div className="button-container">
                    <button className="rc-btn-code">Use Code</button>
                    <button className="rc-btn-buy">Buy</button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RectangleCard;
