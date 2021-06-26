module.exports = {
  testPathForConsistencyCheck: 'some/__tests__/example.test.js',

  /** resolves from test to snapshot path */
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return (
      testPath.replace('src/', 'src/test/__snapshots__/') + snapshotExtension
    );
  },

  /** resolves from snapshot to test path */
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace('src/test/__snapshots__/', 'src/')
      .slice(0, -snapshotExtension.length);
  },
};
