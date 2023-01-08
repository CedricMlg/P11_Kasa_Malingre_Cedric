function Tag(tags) {
  return (
    <div className="Fiche-logement__container-tags">
      {tags.map((tag) => (
        <div className="Fiche-logement__tag">{tag}</div>
      ))}
    </div>
  );
}

export default Tag;
