import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, User, Calendar, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PROTECTED_ROUTES } from "@/routes/routes";
import AppWrapper from "@/components/app-wrapper";
import { API } from "@/lib/axios-client";
import { toast } from "sonner";

const Account = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleUrlSubmit = () => {
    if (avatarUrl.trim()) {
      setFormData({ ...formData, avatar: avatarUrl });
      setShowUrlInput(false);
      setAvatarUrl("");
      toast.success("Avatar URL set. Click 'Save Changes' to update.");
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setIsUploading(true);

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, avatar: base64String });
      };
      reader.readAsDataURL(file);
      toast.success("Image loaded. Click 'Save Changes' to update.");
    } catch (error) {
      toast.error("Failed to load image");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    if (isSaving) return;

    setIsSaving(true);

    try {
      const updateData: any = {};
      if (formData.name !== user?.name) updateData.name = formData.name;
      if (formData.email !== user?.email) updateData.email = formData.email;
      // Only send avatar if it's changed and is not a data URL (already uploaded)
      if (formData.avatar !== user?.avatar) {
        // If it's a URL (not base64), send it directly
        if (!formData.avatar.startsWith('data:')) {
          updateData.avatar = formData.avatar;
        } else {
          // If it's base64, send it for upload
          updateData.avatar = formData.avatar;
        }
      }

      if (Object.keys(updateData).length === 0) {
        toast.info("No changes to save");
        setIsEditing(false);
        return;
      }

      const response = await API.patch("/user/profile", updateData);
      
      // Update local user state
      updateUser(response.data.user);
      
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update profile");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
    });
    setIsEditing(false);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <AppWrapper>
      <div className="h-full overflow-y-auto">
        <div className="container max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(PROTECTED_ROUTES.CHAT)}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
            <p className="text-muted-foreground mt-1">
              Manage your profile and account settings
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={formData.avatar || ""} alt={user?.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {user?.name ? getInitials(user.name) : "U"}
                  </AvatarFallback>
                </Avatar>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                  onClick={handleImageClick}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Camera className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-semibold">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleImageClick}
                    disabled={isUploading}
                  >
                    Upload Photo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowUrlInput(!showUrlInput)}
                  >
                    Use URL
                  </Button>
                </div>
                {showUrlInput && (
                  <div className="flex gap-2 mt-2">
                    <Input
                      placeholder="Enter image URL"
                      value={avatarUrl}
                      onChange={(e) => setAvatarUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="sm" onClick={handleUrlSubmit}>
                      Set
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t pt-6 space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                  />
                ) : (
                  <p className="text-sm px-3 py-2 bg-muted rounded-md">
                    {user?.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email"
                  />
                ) : (
                  <p className="text-sm px-3 py-2 bg-muted rounded-md">
                    {user?.email}
                  </p>
                )}
              </div>

              {/* Member Since */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Member Since
                </Label>
                <p className="text-sm px-3 py-2 bg-muted rounded-md">
                  {user?.createdAt
                    ? format(new Date(user.createdAt), "MMMM dd, yyyy")
                    : "N/A"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {isEditing ? (
                <>
                  <Button 
                    onClick={handleSave} 
                    className="flex-1"
                    disabled={isSaving || isUploading}
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="flex-1"
                    disabled={isSaving || isUploading}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} className="flex-1">
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </AppWrapper>
  );
};

export default Account;
