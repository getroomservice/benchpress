import Git from 'nodegit';

async function getRepo() {
  return Git.Repository.open('.');
}

export async function mostRecentCommit() {
  const repo = await getRepo();
  const ref = await repo.getCurrentBranch();
  return repo.getBranchCommit(ref);
}

export async function mostRecentCommitOnMaster() {
  const repo = await getRepo();
  return repo.getBranchCommit('master');
}
