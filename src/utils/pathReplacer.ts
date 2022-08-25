type ReplaceDataArgs = {
  [key: string]: string | number;
};

export const replacePathVariables = (
  path: string,
  replaceData: ReplaceDataArgs
) =>
  path.replace(/\$(\w+)\$/g, match => {
    const typedMatch = match as keyof ReplaceDataArgs;

    const currentReplacement = replaceData[typedMatch];

    if (typeof currentReplacement === 'number') {
      return replaceData[typedMatch].toString();
    }

    return currentReplacement;
  });

export const replaceRoutesParams = (
  path: string,
  replaceData: ReplaceDataArgs
) =>
  path.replace(/:(\w+)/g, match => {
    const typedMatch = match as keyof ReplaceDataArgs;

    const currentReplacement = replaceData[typedMatch];

    if (typeof currentReplacement === 'number') {
      return replaceData[typedMatch].toString();
    }

    return currentReplacement;
  });
