import MeanComponent from "../../utils/MeanComponent";
import MedianComponent from "../../utils/MedianComponent";
import ModeComponent from "../../utils/ModeComponent";

const WineStatsComponent = ({ wineData }) => {
  const AlcoholClass = Array.from(
    new Set(wineData.map((item) => item.Alcohol))
  );

  const calculateGamma = (data) => {
    const { Ash, Hue, Magnesium } = data;
    return (Ash * Hue) / Magnesium;
  };

  const dataWithGamma = wineData.map((data) => ({
    ...data,
    Gamma: calculateGamma(data),
  }));

  return (
    <div className="wine-stats">
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {AlcoholClass.map((alcohol) => (
              <th key={alcohol}>Class {alcohol}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <p>Flavanoids Mean</p>
              </div>
              <div>
                <p>Flavanoids Median</p>
              </div>
              <div>
                <p>Flavanoids Mode</p>
              </div>
            </td>
            {AlcoholClass.map((alcohol) => (
              <td key={alcohol}>
                <MeanComponent
                  data={wineData
                    .filter((item) => item.Alcohol === alcohol)
                    .map((item) => item.Flavanoids)}
                  alcoholValue={`class-${alcohol}`}
                />
                <MedianComponent
                  data={wineData
                    .filter((item) => item.Alcohol === alcohol)
                    .map((item) => item.Flavanoids)}
                  alcoholValue={`class-${alcohol}`}
                />
                <ModeComponent
                  data={wineData
                    .filter((item) => item.Alcohol === alcohol)
                    .map((item) => item.Flavanoids)}
                  alcoholValue={`class-${alcohol}`}
                />
              </td>
            ))}
          </tr>

          <tr>
            <td>
              <div>
                <p>Gamma Mean</p>
              </div>
              <div>
                <p>Gamma Median</p>
              </div>
              <div>
                <p>Gamma Mode</p>
              </div>
            </td>
            {AlcoholClass.map((alcohol) => (
              <td key={alcohol}>
                <MeanComponent
                  data={dataWithGamma
                    .filter((item) => item.Alcohol === alcohol)
                    .map((item) => item.Gamma)}
                  alcoholValue={`class-${alcohol}`}
                />
                <MedianComponent
                  data={dataWithGamma
                    .filter((item) => item.Alcohol === alcohol)
                    .map((item) => item.Gamma)}
                  alcoholValue={`class-${alcohol}`}
                />
                <ModeComponent
                  data={dataWithGamma
                    .filter((item) => item.Alcohol === alcohol)
                    .map((item) => item.Gamma)}
                  alcoholValue={`class-${alcohol}`}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStatsComponent;
