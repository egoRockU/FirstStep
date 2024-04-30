export const convertResLink = (resume) => {
  const domain = window.location.origin;
  return `${domain}/resume/${resume.templateId}/${resume.resumeId}`;
};
