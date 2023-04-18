// This rule will populate the edited features field with a value from an intersecting feature

// Value to copy from the intersected feature
var intersecting_field = "navn";

// Create feature set to the intersecting class using the GDB Name
var intersecting_featset = FeatureSetByName($map, 'Region', [intersecting_field], true);

// Intersect the edited feature with the feature set and retrieve the first feature
var intersected_feature = First(Intersects(intersecting_featset, $feature));
Console(intersected_feature)

// Check to make sure there was an intersected feature, if not, return the original value
if (IsEmpty(intersected_feature) || intersected_feature == null)
{ 
    return;
}
// If the intersected feature is null, return the original value
if (IsEmpty(intersected_feature.navn))
{
    return;
}
return intersected_feature[intersecting_field]