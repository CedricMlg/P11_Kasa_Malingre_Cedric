function Tag(tags) {
  return (
    <div className="fiche-logement__container-tags">
      {tags.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
    </div>
  );
}

export default Tag;
