export const loadInstalledApp = () => {
  try {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addToInstallation = (app) => {
  const existingInstalledApps = loadInstalledApp();
  try {
    const isDuplicate = existingInstalledApps.some((a) => a.id === app.id);

    if (isDuplicate) return alert("Already Exists!");

    const updateInstalledList = [...existingInstalledApps, app];

    localStorage.setItem("installedApps", JSON.stringify(updateInstalledList));
  } catch (err) {
    console.log(err);
    return;
  }
};

export const removeFromInstallation = (id) => {
  const existingInstalledApps = loadInstalledApp();
  try {
    const updateInstalledList = existingInstalledApps.filter(
      (app) => app.id !== id
    );

    localStorage.setItem("installedApps", JSON.stringify(updateInstalledList));
  } catch (err) {
    console.log(err);
    return;
  }
};
