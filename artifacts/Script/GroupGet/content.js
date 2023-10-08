result.data = await entities.survey_groups.findOne({ id: req.query.id });
complete();
